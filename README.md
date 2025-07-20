# Next-Portfolio

## Personal Website

*2025-07-15*

本来准备在 [My-Portfolio](https://github.com/mdfcsC/My-Portfolio) 里构建然后部署的，但是 GitHub Pages 只支持静态部署，所以每次修改后都要 build。

由于我不希望更改我原有的 docs 文件夹的结构，而是给 Next.JS 项目构建的文件单放一个文件夹，再用 docs/index.html 重定向到 Next.JS 构建的主页面。

事实上，即使不停地寻求 Claude 的帮助，这种部署的方法还是不停报错，令人心累。

在经过两天的缠斗后，放弃在 Github Pages 上部署的想法，转战 Vercel。

至于 My-Portfolio/docs/index.html ，它会重定向到 [我的新主页](https://mdfcsc-next-portfolio.vercel.app/)。

*2025-07-20*  

刚得知一个旧闻，国内无法正常访问 Vercel  
