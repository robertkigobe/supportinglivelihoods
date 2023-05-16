echo "creating Git"
git init
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/robertkigobe/supportinglivelihoods.git

echo "Updating Git"
git remote add origin https://github.com/robertkigobe/supportinglivelihoods.git
git branch -M main
git push -u origin main

echo "git checkout -b carousel__mobile"
git add .
git commit -a -m "carousel__mobile"
git push --set-upstream origin carousel__mobile

echo "Building app"
npm run build 

echo "Deploying to server"
scp -r build/* rkigobe@134.209.70.116:/var/www/supportinglivelihoods.org

echo "done"