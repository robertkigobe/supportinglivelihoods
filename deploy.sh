echo "Updating Git"

echo "git checkout -b carousel__mobile"
git add .
git commit -a -m "carousel__mobile"
git push --set-upstream origin carousel__mobile

echo "Building app"
npm run build 

echo "Deploying to server"
scp -r build/* rkigobe@134.209.70.116:/var/www/134.209.70.116

echo "done"

"https://getcssscan.com/css-buttons-examples"