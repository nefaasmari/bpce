@echo off
echo Copie locale du référentiel

if "%1"=="" goto end

REM Copy des dépendances non liées à une version

robocopy \\myway-atelier\DependancesTS\style .\\_dependances\style /MIR
robocopy \\myway-atelier\DependancesTS\templates .\\_dependances\templates /MIR
robocopy \\myway-atelier\DependancesTS\typings .\\_dependances\typings /MIR
robocopy \\myway-atelier\DependancesTS .\\_dependances gulpfile.js

robocopy Y:\Util32\OutilsMyWay\gulp\v2\projet .\ package.json
robocopy Y:\Util32\OutilsMyWay\gulp\v2\projet .\ npm-shrinkwrap.json

REM Copy des dépendances liées à une version

robocopy \\myway-atelier\DependancesTS\%1 .\\_dependances\%1 /MIR

REM Installation / Mise à jour des librairies npm

npm3 install --no-optional

goto:eof

:end
echo Veuillez indiquer une version du type "update v17.01"