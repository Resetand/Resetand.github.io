==================================================================================================================================
gulp -v4^
������ ������������� �� ������ � ������������� sass(����������� scss);
����� dev - ���� ������� �����
����� build - ���� ����� �������� ������� (������� ��� ��������)
� ����� ������������ �������� ������� bower. ����� ��������������� � dev/libs � ���������� � ������ ������ (��������
css � js) ������� ����� � build/css/libs.css � build/css/libs.js ��������������


� ��� ������ ���� ��������� node.js � �������� �������� npm(npm  ��� ������� ��������������� ������ � node.js).

1. �������� ������� node � js (� cmd node --version / npm --version)
2. ���������� gulp ��������� npm (install --global gulp-cli)
3. ������ � ����� ������� � ��������� (npm i) ��� ������ ������ ������������ � �������������� ������ (������� ������������ �����)
4. ��������� ������ (gulp) 

� �������� �������� �� ������ ��������� � ����� dev
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