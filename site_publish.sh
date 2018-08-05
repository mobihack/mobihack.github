rmdir -r _site
bundle exec jekyll build
cd _site
touch .nojekyll
git init
git remote add origin git@github.com:mobihack/mobihack.github.io.git
git checkout master
git add -A
git commit -m "autogen: Jekyll Build Upload!"
git push -f origin master