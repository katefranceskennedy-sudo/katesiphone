<#
Usage: run this in PowerShell after extracting the "Jackets countdown.zip" into ./.tmp/jackets-countdown
Requires: ImageMagick (magick) and ffmpeg in PATH

This script will:
- convert SVG frames to numbered PNGs
- create a video from the PNG sequence
- generate a poster frame
- write outputs to ./public/jacket-countdown.mp4 and ./public/jacket-countdown-poster.jpg
#>

$srcDir = Join-Path $PSScriptRoot "..\.tmp\jackets-countdown"
$outMp4 = Join-Path $PSScriptRoot "..\public\jacket-countdown.mp4"
$outPoster = Join-Path $PSScriptRoot "..\public\jacket-countdown-poster.jpg"
$tmpPngDir = Join-Path $PSScriptRoot "..\.tmp\jackets-pngs"

New-Item -ItemType Directory -Force -Path $tmpPngDir | Out-Null

Write-Output "Converting SVGs in $srcDir to PNG frames..."
$i = 0
Get-ChildItem -Path $srcDir -Include *.svg -File | Sort-Object Name | ForEach-Object {
    $i++
    $out = Join-Path $tmpPngDir ([string]::Format("frame-{0:D4}.png", $i))
    Write-Output "  Converting $($_.FullName) -> $out"
    magick convert $_.FullName -background none -resize 1280x $out
}

Write-Output "Creating MP4 from PNG sequence..."
ffmpeg -y -framerate 30 -i (Join-Path $tmpPngDir "frame-%04d.png") -c:v libx264 -pix_fmt yuv420p -crf 23 -movflags +faststart $outMp4

Write-Output "Generating poster frame..."
ffmpeg -y -i $outMp4 -ss 00:00:00.500 -vframes 1 -q:v 2 $outPoster

Write-Output "Done. Output: $outMp4 and $outPoster"
