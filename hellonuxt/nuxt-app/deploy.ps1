# ==============================================
# deploy.ps1 - fully automated Nuxt -> miniapp
# Works even if execution policy is restricted
# ==============================================

# Bypass Execution Policy for this run (only for this script)
if ($env:PSExecutionPolicyPreference -ne 'Bypass') {
    powershell -NoProfile -ExecutionPolicy Bypass -Command "& {&'$PSCommandPath'}"
    exit
}

# Paths
$nuxtApp = "."
$hellominiappNuxt = "..\..\hellominiapp\public\nuxt"
$hellonuxtOutput = "$nuxtApp\.output\public"

# Optional: auto-build Nuxt
Write-Host "Building Nuxt app..."
npm run generate

# Ensure build exists
if (-Not (Test-Path $hellonuxtOutput)) {
    Write-Error "Nuxt build output not found at $hellonuxtOutput. Run 'npm run generate' first."
    exit 1
}

# Clean old Nuxt in miniapp
if (Test-Path $hellominiappNuxt) {
    Write-Host "Cleaning old Nuxt build in hellominiapp..."
    Remove-Item -Recurse -Force $hellominiappNuxt
}

# Copy new build
Write-Host "Copying new Nuxt build to hellominiapp..."
Copy-Item -Recurse -Force $hellonuxtOutput $hellominiappNuxt

Write-Host "✅ Done! Your Nuxt app is ready in hellominiapp/public/nuxt/"
