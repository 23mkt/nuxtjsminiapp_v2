If you make changes (or its your first time running) in hellonuxt and want them to reflect on the preview of hellominiapp, these are the steps:

[Relative Path] = The path where your nuxtjsminiapp-main folder/zip is located.

Step 1 (In hellonuxt):

npm install (if first time)

Make changes within app.vue, or where other changes are needed

Navigate to [Relative Path]\hellonuxt\nuxt-app

In terminal, use ".\deploy.ps1"

If deploy.ps1 is not digitally signed, you can run these codes to bypass/allow the script to:

Bypass once this run only: powershell -ExecutionPolicy Bypass -File .\deploy.ps1

Bypass all local scripts for this user: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force

deploy.ps1 script essentially deletes old nuxt folders/files from hellominiapp, runs npm run build and npm run generate at hellonuxt, and exports those files back into hellominiapp where the old folders were deleted.

Step 2 (In hellominiapp):

IF FIRST TIME:

npm install 

npm run start (Run Preview Miniapp in VS Code (For Phone Emulator))

IF EDITING HELLONUXT:

JUST REFRESH THE PHONE EMULATOR OR RESTART IT
