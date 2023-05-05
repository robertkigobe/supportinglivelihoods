echo "Updating Git"
echo "git checkout -b carousel"
git add .
git commit -a -m "Comment"
git push -u origin main

echo "Building app"
npm run build 

echo "Deploying to server"
scp -r build/* rkigobe@134.209.70.116:/var/www/134.209.70.116

echo "done"