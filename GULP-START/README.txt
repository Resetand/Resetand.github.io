==================================================================================================================================
gulp -v4^
Сборка ориентирована на работу с прероцессором sass(синтаксисом scss);
Папка dev - ваша рабочая папка
Папка build - ваша папка готового проекта (готовая для продакшн)
В сбрке используется менеджер пакетов bower. Файлы устанавливаются в dev/libs а собираются в единых файлах (отдельно
css и js) которые лежат в build/css/libs.css и build/css/libs.js соответственно


У вас должен быть утановлен node.js и пакетный менеджер npm(npm  как правило устанавливается вместе с node.js).

1. Проверте наличие node и js (в cmd node --version / npm --version)
2. Установите gulp глобально npm (install --global gulp-cli)
3. Задите в папку проекта и пропишите (npm i) все пакеты должны установиться в автамотическом режиме (Знимает определенное время)
4. Запустите сборку (gulp) 

В конечном варианте вы просто работаете в папке dev
==================================================================================================================================
==================================================================================================================================
The build is focused on working with the sass preprocessor (syntax scss);
The dev folder is your working folder.
The build folder is the finished project folder (ready for production).
The package uses the bower package manager. Files are installed in dev / libs and collected into separate files (separately
css and js), which are in build / css / libs.css and build / css / libs.js respectively


You must have node.js and the npm package manager (npm usually installed along with node.js).

1. Check node and js (in node cmd --version / npm --version)
2. Install gulp globally npm (install --global gulp-cli)
3. Add to the project folder and the list (npm i) all packages must be installed in auto mode (captures a specific time)
4. Run the build (sip)

In the final version, you simply work in the dev folder.
==================================================================================================================================