
#!/usr/bin/env bash

sourceProjectName="$1"
newProjectName="$2"
workingDir=$(pwd)
sourceProjectDir="$workingDir/$sourceProjectName"
newProjectDir="$workingDir/$newProjectName"

cp -R "$sourceProjectDir/" "$newProjectDir/"
find $newProjectDir -type f -not -path "$newProjectDir/node_modules/*" -print0 | xargs -0 sed -i '' "s/ClearProject/$newProjectName/g"
rm -rf "$newProjectDir/.expo"