If you make changes (or its your first time running) in hellonuxt and want them to reflect on the preview of hellominiapp, these are the steps:

[Relative Path] = The path where your nuxtjsminiapp-main folder/zip is located.

Step 1 (In hellonuxt):

npm install (if first time)

In Terminal, navigate to [Relative Path]\hellonuxt\nuxt-app

Make changes within app.vue, or where other changes are needed

In terminal, use ".\deploy.ps1"

If deploy.ps1 is not digitally signed, you can run these codes to bypass/allow the script to bypass once this run only: 

powershell -ExecutionPolicy Bypass -File .\deploy.ps1

deploy.ps1 script essentially deletes old nuxt folders/files from hellominiapp, runs npm run build and npm run generate at hellonuxt, and exports those files back into hellominiapp where the old folders were deleted.

Step 2 (In hellominiapp):

IF FIRST TIME:

npm install 

npm run start (Run Preview Miniapp in VS Code (For Phone Emulator))

IF EDITING HELLONUXT:

JUST REFRESH THE PHONE EMULATOR OR RESTART IT
