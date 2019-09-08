pushd .
touch gatsby-config.js
mkdir content
cd content
mkdir authors
mkdir posts
cd authors
touch authors.yml
mkdir avatars
cd avatars
touch avatar.jpg
cd ../..
mkdir posts/2019-08-28-my-first-novela-post
mkdir posts/2019-08-28-my-first-novela-post/images
touch posts/2019-08-28-my-first-novela-post/index.mdx
popd
yarn init --private --yes
yarn add react react-dom gatsby @narative/gatsby-theme-novela
