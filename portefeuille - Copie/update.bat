@echo off
echo Copie locale du r�f�rentiel

if "%1"=="" goto end

REM Copy des d�pendances non li�es � une version

robocopy \\myway-atelier\DependancesTS\style .\\_dependances\style /MIR
robocopy \\myway-atelier\DependancesTS\templates .\\_dependances\templates /MIR
robocopy \\myway-atelier\DependancesTS\typings .\\_dependances\typings /MIR
robocopy \\myway-atelier\DependancesTS .\\_dependances gulpfile.js

robocopy Y:\Util32\OutilsMyWay\gulp\v2\projet .\ package.json
robocopy Y:\Util32\OutilsMyWay\gulp\v2\projet .\ npm-shrinkwrap.json

REM Copy des d�pendances li�es � une version

robocopy \\myway-atelier\DependancesTS\%1 .\\_dependances\%1 /MIR

REM Installation / Mise � jour des librairies npm

npm3 install --no-optional

goto:eof

:end
echo Veuillez indiquer une version du type "update v17.01"