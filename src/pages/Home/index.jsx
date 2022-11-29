
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './Component/MainFeaturedPost';
import FeaturedPost from './Component/FeaturedPost';
import Main from './Component/Main';
import Sidebar from './Component/Sidebar';
import Footer from './Component/Footer';
// import post from './Component/post.md'
import { Toolbar, } from "@mui/material";
const mainFeaturedPost = {
  title: 'Valyria',
  description:
    "Valyria 是基于 generals.io 游戏规则的在线 AI 对战平台，玩家需要通过脚本语言编写自己的 AI 程序，与其他玩家的 AI 程序进行对战。",
  image: 'src/logo/logo.svg',//图片还没想好放啥
  imageText: 'main image description',
  linkText: '获取更多信息',
};

const featuredPosts = [
  {
    title: '编写脚本',
    detail: 'Script',
    description:
      '参考样例脚本，编写出属于你自己的最强脚本！',
    image: 'src/picture/edit.svg',
    imageLabel: 'Image Text',
    text: '点击开始编写'
  },
  {
    title: '开启排位赛',
    detail: 'Qualifying',
    description:
      "对战不同玩家，证明自己的实力！",
    image: 'src/picture/pk.svg',
    imageLabel: 'Image Text',
    text: '点击开始排位'
  },
];


const sidebar = {
  title: '软工大作业好难受',
  description:
    '啊确实',
  archives: [
    { title: '11.20 排位赛开启通知', url: '#' },
    { title: '11.19 游戏维护通知', url: '#' },


  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function HomePage() {

  const posts = ['1123'];
  return (
    <ThemeProvider theme={theme}>
      <Toolbar />
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="游戏介绍" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}