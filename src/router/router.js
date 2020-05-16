const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: () => import("../components/common/main"),
    children: [
      { path: "/home", redirect: "/home/home" },
      {
        path: "/login",
        name: "login",
        component: () => import("../components/pages/login"),
        meta: { title: "用户登录" },
      },
      {
        path: "home",
        component: () => import("../views/home-page"),
        meta: { title: "Coding Happier" },
        name: "home",
      },
      //user_info
      {
        path: "profile",
        component: () => import("../views/profile-page"),
        meta: { title: "个人中心" },
        name: "profile",
        children: [
          { path: "/home/profile", redirect: "/home/profile/user_home" },
          {
            path: "user_setting",
            component: () => import("../views/profile-page/blog_page"),
            name: "user_setting",
            meta: {
              title: "个人设置",
            },
          },
          // user_home
          {
            path: "user_home",
            component: () => import("../views/profile-page/home_page"),
            name: "user_home",
            meta: {
              title: "个人主页",
            },
          },
          {
            path: "user_blog",
            component: () => import("../views/profile-page/blog_page"),
            name: "user_blog",
            meta: {
              title: "个人博客",
            },
          },
          // user_tags
          {
            path: "user_tags",
            component: () => import("../views/profile-page/user_tags"),
            name: "user_tags",
            meta: {
              title: "个人博客",
            },
          },
          {
            path: "user_add_tags",
            component: () => import("../views/profile-page/add_tags"),
            name: "user_add_tags",
            meta: {
              title: "个人相册",
            },
          },
          {
            path: "user_photo",
            component: () => import("../views/profile-page/photo_page"),
            name: "user_photo",
            meta: {
              title: "个人相册",
            },
          },
          {
            path: "*",
            component: () => import("../components/pages/404"),
          },
        ],
      },
      {
        path: "blog",
        component: () => import("../views/profile-page/new_essay"),
        meta: { title: "添加博客" },
        name: "blog",
      },
      {
        path: "edit/:id",
        component: () => import("../views/profile-page/new_essay"),
        meta: { title: "编辑博客" },
        name: "edit",
      },
      {
        path: "about",
        component: () => import("../views/about-page"),
        meta: { title: "关于" },
        name: "about",
      },
      {
        path: "contact",
        component: () => import("../views/contact-page"),
        meta: { title: "联系我" },
        name: "contact",
      },
      {
        path: "/details/:id",
        component: () => import("../views/content-details"),
        meta: { title: "文章详情" },
        name: "details",
      },
      {
        path: "/image_resoures",
        component: () => import("../views/resourse-page/img_resourse"),
        meta: { title: "图片资源" },
        name: "image_resoures",
      },
      {
        path: "/aritical_list",
        component: () => import("../views/artical-page"),
        meta: { title: "文章列表" },
        name: "artical",
      },
      {
        path: "/add_artical",
        component: () => import("../views/artical-page/add_artical"),
        meta: { title: "添加文章" },
        name: "artical",
      },
      // type-manger
      {
        path: "/type_list",
        component: () => import("../views/type-manger"),
        meta: { title: "类型列表" },
        name: "type",
      },
      {
        path: "/*",
        component: () => import("../components/pages/404"),
      },
    ],
  },
];
export default routes;
