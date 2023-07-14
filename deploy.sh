
name="mobile_version"
echo "git checkout -b "$name
git checkout -b $name
git add .
git commit -a -m $name
git push --set-upstream origin $name
git checkout main
git pull

echo "Building app"
npm run build 

echo "Deploying to server"
scp -r build/* rkigobe@143.198.126.139:/var/www/143.198.126.139


echo "done"