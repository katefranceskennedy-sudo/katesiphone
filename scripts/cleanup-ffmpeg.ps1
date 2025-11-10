<#
Deletes the temporary ffmpeg install at C:\ffmpeg and the workspace .tmp folder created earlier.
Run from an elevated PowerShell if necessary.

Usage:
  .\scripts\cleanup-ffmpeg.ps1
#>

$paths = @("C:\ffmpeg", "$PSScriptRoot\..\.tmp")
foreach ($p in $paths) {
    if (Test-Path $p) {
        Write-Output "Removing $p ..."
        try {
            Remove-Item -Path $p -Recurse -Force -ErrorAction Stop
            Write-Output "Removed $p"
        } catch {
            Write-Warning "Failed to remove $p: $_"
        }
    } else {
        Write-Output "Not found: $p"
    }
}
