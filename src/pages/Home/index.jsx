
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

const mainFeaturedPost = {
  title: '项目介绍',
  description:
    "感觉链接可以放包括整个游戏的介绍，以及各个页面的详细操作教程,这后面的图片是随机放的",
  image: 'https://source.unsplash.com/random',//图片还没想好放啥
  imageText: 'main image description',
  linkText: '获取更多信息',
};

const featuredPosts = [
  {
    title: '编写脚本',
    detail: 'Script',
    description:
      'balabala，这里要写个啥',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    text: '点击开始编写'
  },
  {
    title: '开启排位赛',
    detail: 'Qualifying',
    description:
      'balabala，这里又要写个啥',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    text: '点击开始对战'
  },
];
const posts = ['这里可以是个generials简单介绍'];
const sidebar = {
  title: '团队介绍',
  description:
    '这里可以放个啥呢？',
  archives: [
    { title: '公告1', url: '#' },
    { title: '公告2', url: '#' },
    { title: '公告3', url: '#' },
    { title: '公告4', url: '#' },
    { title: '公告5', url: '#' },
    { title: '公告6', url: '#' },
    { title: '公告7', url: '#' },
    { title: '公告8', url: '#' },
    { title: '公告9', url: '#' },
    { title: '公告10', url: '#' },

  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
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