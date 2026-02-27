export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const ARTICLES: Article[] = [
  {
    id: 'css-grid',
    title: '用 CSS Grid 打造响应式布局的最佳实践',
    date: '2026-02-10',
    category: '前端开发',
    readTime: '5 分钟阅读',
    excerpt:
      'CSS Grid 是现代前端布局的核心技术之一。本文将通过几个实际案例，带你掌握 Grid 布局中最常用的技巧和模式……',
    tags: ['CSS', '布局', '响应式'],
    content: `
    <h2>为什么选择 CSS Grid？</h2>
    <p>在现代前端开发中，布局方案经历了从 <code>float</code> 到 <code>Flexbox</code> 再到 <code>CSS Grid</code> 的演进。Flexbox 擅长一维布局（行或列），而 CSS Grid 则是真正的二维布局系统，能够同时控制行和列。</p>
    <p>当你需要构建复杂的页面结构——比如带侧边栏的博客、仪表盘、图片画廊——CSS Grid 是最自然的选择。</p>

    <blockquote>
      <p>CSS Grid 不是 Flexbox 的替代品，而是互补。简单的一维排列用 Flex，复杂的二维布局用 Grid。</p>
    </blockquote>

    <h2>基础概念速览</h2>
    <p>使用 CSS Grid 只需要两步：将容器设为 <code>display: grid</code>，然后定义行列模板。</p>

    <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
}</code></pre>

    <p>这段代码创建了一个两列布局：左列自适应宽度，右列固定 300px，行列之间间距 2rem。几个核心概念：</p>
    <ul>
      <li><code>fr</code> 单位：表示剩余空间的比例份数</li>
      <li><code>gap</code>：设置网格项之间的间距，替代了以前用 margin 模拟间距的方式</li>
      <li><code>grid-template-columns / rows</code>：定义网格的列和行</li>
    </ul>

    <h2>实战案例一：经典博客布局</h2>
    <p>我们这个博客首页就是一个典型的 Grid 布局案例——主内容区 + 侧边栏：</p>

    <pre><code>.blog-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* 移动端切换为单列 */
@media (max-width: 860px) {
  .blog-layout {
    grid-template-columns: 1fr;
  }
}</code></pre>

    <p>仅用几行代码就实现了一个完全响应式的布局。在宽屏上是双列，移动端自动切换为单列，不需要任何 JavaScript。</p>

    <h2>实战案例二：自适应卡片网格</h2>
    <p>展示一组卡片时，我们希望卡片能根据屏幕宽度自动调整列数。<code>auto-fill</code> 和 <code>minmax()</code> 的组合堪称完美：</p>

    <pre><code>.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}</code></pre>

    <p>这一行声明的含义是：每列最小 280px、最大 1fr，列数由容器宽度自动决定。当屏幕缩小时，列数自动减少；屏幕放大时，列数自动增加。完全不需要媒体查询。</p>

    <h3>auto-fill vs auto-fit</h3>
    <p>这两个关键字经常让人混淆：</p>
    <ul>
      <li><code>auto-fill</code>：尽可能多地创建列，即使列是空的也保留位置</li>
      <li><code>auto-fit</code>：与 auto-fill 类似，但会把空列折叠为 0 宽度，让已有的项目拉伸填满</li>
    </ul>
    <p>当项目数量不固定时，通常选择 <code>auto-fill</code>；当你希望少量项目也能占满整行时，使用 <code>auto-fit</code>。</p>

    <h2>实战案例三：命名区域布局</h2>
    <p>对于整个页面的宏观布局，<code>grid-template-areas</code> 提供了一种极其直观的写法：</p>

    <pre><code>.page {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.page-header  { grid-area: header; }
.page-sidebar { grid-area: sidebar; }
.page-main    { grid-area: main; }
.page-footer  { grid-area: footer; }</code></pre>

    <p>代码几乎就是页面布局的"ASCII 艺术"，一眼就能看出各区域的位置关系。响应式适配只需重新定义 <code>grid-template-areas</code>：</p>

    <pre><code>@media (max-width: 768px) {
  .page {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }
}</code></pre>

    <h2>常用技巧总结</h2>
    <ol>
      <li><strong>用 <code>minmax()</code> 避免溢出</strong>：<code>minmax(0, 1fr)</code> 可以防止内容撑破网格</li>
      <li><strong>用 <code>place-items</code> 居中</strong>：<code>place-items: center</code> 是最简洁的居中方式</li>
      <li><strong>子网格 <code>subgrid</code></strong>：让子元素继承父网格的行列定义，保持对齐（主流浏览器已支持）</li>
      <li><strong>Grid 与 Flex 混用</strong>：外层用 Grid 控制宏观布局，内部卡片用 Flex 排列内容</li>
    </ol>

    <h2>浏览器兼容性</h2>
    <p>截至 2026 年，CSS Grid 在所有主流浏览器中的支持率已超过 <strong>98%</strong>。<code>subgrid</code> 也在 Chrome 117+、Firefox 71+、Safari 16+ 中得到支持。放心大胆地在生产环境中使用吧。</p>

    <blockquote>
      <p>如果你还在用 float 做布局，是时候拥抱 Grid 了。它不仅让代码更简洁，也让维护变得更轻松。</p>
    </blockquote>`,
  },
  {
    id: 'js-async',
    title: 'JavaScript 异步编程：从回调到 async/await',
    date: '2026-02-05',
    category: 'JavaScript',
    readTime: '8 分钟阅读',
    excerpt:
      '异步编程是 JavaScript 的核心概念。本文梳理了从回调函数、Promise 到 async/await 的演进历程，并给出实际项目中的使用建议……',
    tags: ['JavaScript', '异步'],
    content: `
    <h2>为什么 JavaScript 需要异步？</h2>
    <p>JavaScript 是单线程语言，如果所有操作都同步执行，一个耗时的网络请求就会阻塞整个页面。异步编程让我们能在等待 I/O 操作时继续执行其他代码，保持界面的流畅响应。</p>

    <h2>回调函数：最原始的方式</h2>
    <p>回调函数是 JavaScript 最早的异步模式。将一个函数作为参数传递，在异步操作完成后调用它：</p>

    <pre><code>function fetchData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => callback(null, JSON.parse(xhr.responseText));
  xhr.onerror = () => callback(new Error('请求失败'));
  xhr.send();
}

fetchData('/api/user', (err, user) => {
  if (err) return console.error(err);
  fetchData('/api/posts?uid=' + user.id, (err, posts) => {
    if (err) return console.error(err);
    console.log(posts);
  });
});</code></pre>

    <p>当多个异步操作存在依赖关系时，回调会层层嵌套，形成所谓的"回调地狱"（Callback Hell），代码难以阅读和维护。</p>

    <h2>Promise：链式调用的优雅</h2>
    <p>ES6 引入的 <code>Promise</code> 通过链式调用解决了回调嵌套的问题：</p>

    <pre><code>fetch('/api/user')
  .then(res => res.json())
  .then(user => fetch('/api/posts?uid=' + user.id))
  .then(res => res.json())
  .then(posts => console.log(posts))
  .catch(err => console.error(err));</code></pre>

    <p>Promise 有三种状态：<code>pending</code>（等待中）、<code>fulfilled</code>（已完成）、<code>rejected</code>（已拒绝）。状态一旦改变就不可逆。</p>

    <h3>Promise 的实用方法</h3>
    <ul>
      <li><code>Promise.all()</code>：所有 Promise 都成功才返回结果，适合并行请求</li>
      <li><code>Promise.race()</code>：返回最先完成的 Promise，适合超时控制</li>
      <li><code>Promise.allSettled()</code>：等所有 Promise 完成，无论成功或失败</li>
      <li><code>Promise.any()</code>：返回第一个成功的 Promise</li>
    </ul>

    <h2>async/await：同步写法的异步代码</h2>
    <p>ES2017 的 <code>async/await</code> 是目前最推荐的异步写法。它本质上是 Promise 的语法糖，但让异步代码看起来像同步代码：</p>

    <pre><code>async function loadUserPosts() {
  try {
    const userRes = await fetch('/api/user');
    const user = await userRes.json();

    const postsRes = await fetch('/api/posts?uid=' + user.id);
    const posts = await postsRes.json();

    console.log(posts);
  } catch (err) {
    console.error('加载失败:', err);
  }
}</code></pre>

    <p>相比 Promise 链，<code>async/await</code> 的优势在于：</p>
    <ol>
      <li>代码更直观，逻辑更清晰</li>
      <li>错误处理用熟悉的 <code>try/catch</code></li>
      <li>调试更友好，可以逐行断点</li>
    </ol>

    <h2>实战技巧</h2>
    <h3>并行执行多个请求</h3>
    <p>不要在循环中顺序 <code>await</code>，这会让请求串行执行。使用 <code>Promise.all</code> 并行处理：</p>

    <pre><code>// 错误：串行执行，很慢
for (const url of urls) {
  const res = await fetch(url);  // 一个一个等
}

// 正确：并行执行，更快
const results = await Promise.all(
  urls.map(url => fetch(url).then(r => r.json()))
);</code></pre>

    <h3>错误处理的最佳实践</h3>
    <p>不要让每个 <code>await</code> 都包在单独的 <code>try/catch</code> 里。对于一组相关操作，使用一个 <code>try/catch</code> 即可。对于需要区分错误来源的场景，可以用包装函数：</p>

    <pre><code>async function to(promise) {
  try {
    const data = await promise;
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

const [err, user] = await to(fetchUser());
if (err) return handleError(err);</code></pre>

    <blockquote>
      <p>异步编程的演进体现了 JavaScript 社区对开发体验的不断追求。从回调到 async/await，代码越来越接近人类的思维方式。</p>
    </blockquote>`,
  },
  {
    id: 'year-review-2025',
    title: '我的 2025 年终总结：成长与反思',
    date: '2026-01-15',
    category: '随笔',
    readTime: '6 分钟阅读',
    excerpt:
      '回顾过去一年的学习和工作，分享几点重要的感悟。关于技术选型、团队协作和个人成长，希望对你也有所启发……',
    tags: ['年终总结', '成长'],
    content: `
    <h2>回顾这一年</h2>
    <p>2025 年是充实且充满变化的一年。从年初的迷茫到年末逐渐找到自己的节奏，这个过程有收获也有遗憾。写下这篇总结，既是给自己一个交代，也希望能给同路人一些启发。</p>

    <h2>技术成长</h2>
    <p>今年最大的技术收获是深入学习了前端工程化和 DevOps 实践。从 Webpack 迁移到 Vite，搭建了完整的 CI/CD 流水线，也第一次在生产环境中使用了 Docker 和 Kubernetes。</p>
    <p>几个关键的学习心得：</p>
    <ul>
      <li><strong>不要追新而追新</strong>：新技术层出不穷，重要的是评估它是否真正解决了你的问题</li>
      <li><strong>深度优于广度</strong>：精通一两个框架比浅尝辄止十个更有价值</li>
      <li><strong>写文档和博客是最好的学习方式</strong>：输出倒逼输入，写的过程中会发现自己理解的盲区</li>
    </ul>

    <h2>工作感悟</h2>
    <p>今年参与了公司内部平台的重构项目，从零开始设计前端架构。这个过程让我深刻体会到：</p>
    <ol>
      <li><strong>技术选型要服务于业务</strong>：不是最先进的技术就是最好的，团队能上手、能维护才是关键</li>
      <li><strong>沟通比代码更重要</strong>：花 30 分钟和产品经理对齐需求，能省下 3 天的返工</li>
      <li><strong>代码审查是团队成长的加速器</strong>：既帮助别人提升，也能从同事那里学到新思路</li>
    </ol>

    <blockquote>
      <p>好的工程师不只是写好代码，更是在正确的时间做出正确的技术决策。</p>
    </blockquote>

    <h2>生活与平衡</h2>
    <p>上半年由于项目压力，连续加班了两个月，身体和精神状态都不太好。下半年刻意调整了节奏：</p>
    <ul>
      <li>坚持每天运动 30 分钟，哪怕只是散步</li>
      <li>周末尽量不碰工作代码，留给阅读和陪家人</li>
      <li>开始写日记，记录每天的小确幸</li>
    </ul>
    <p>这些看似简单的改变，实际上显著提升了工作效率和生活满意度。</p>

    <h2>阅读清单</h2>
    <p>今年读了 15 本书，推荐几本对我影响最大的：</p>
    <ul>
      <li><strong>《重构》</strong>—— Martin Fowler 的经典，让我重新审视了代码质量</li>
      <li><strong>《深入理解 TypeScript》</strong>—— 从此不再害怕类型体操</li>
      <li><strong>《被讨厌的勇气》</strong>—— 阿德勒心理学入门，帮助我减少了很多内耗</li>
    </ul>

    <h2>2026 年展望</h2>
    <p>新的一年，给自己定了几个目标：</p>
    <ol>
      <li>深入学习 Rust，拓展技术边界</li>
      <li>保持博客更新，至少每月两篇</li>
      <li>参与一个开源项目并贡献有意义的 PR</li>
      <li>考一个云计算相关的认证</li>
    </ol>

    <blockquote>
      <p>种一棵树最好的时间是十年前，其次是现在。保持学习，保持热爱。</p>
    </blockquote>`,
  },
  {
    id: 'docker-guide',
    title: 'Docker 入门指南：从零搭建开发环境',
    date: '2026-01-03',
    category: 'DevOps',
    readTime: '10 分钟阅读',
    excerpt:
      'Docker 让开发环境的搭建变得简单可复现。本文将手把手教你安装 Docker、编写 Dockerfile、使用 docker-compose 管理多容器应用……',
    tags: ['Docker', '容器', 'DevOps'],
    content: `
    <h2>什么是 Docker？</h2>
    <p>Docker 是一个容器化平台，它可以将应用和依赖打包在一个轻量级、可移植的容器中。和传统虚拟机不同，容器共享宿主机的操作系统内核，启动速度快、资源占用少。</p>
    <p>一句话概括 Docker 的价值：<strong>"在我电脑上能跑"不再是借口。</strong></p>

    <h2>核心概念</h2>
    <ul>
      <li><strong>镜像（Image）</strong>：只读的应用模板，包含运行所需的一切</li>
      <li><strong>容器（Container）</strong>：镜像的运行实例，可以启动、停止、删除</li>
      <li><strong>Dockerfile</strong>：构建镜像的脚本，定义了从基础镜像到最终镜像的每一步</li>
      <li><strong>Docker Compose</strong>：多容器编排工具，用 YAML 文件定义和管理多个服务</li>
    </ul>

    <h2>编写 Dockerfile</h2>
    <p>以一个 Node.js 应用为例，Dockerfile 如下：</p>

    <pre><code># 使用 Node.js 20 LTS 作为基础镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 先复制依赖文件，利用缓存
COPY package*.json ./
RUN npm ci --only=production

# 复制源代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", "server.js"]</code></pre>

    <p>几个最佳实践：</p>
    <ol>
      <li><strong>使用 alpine 镜像</strong>：体积更小，通常只有几十 MB</li>
      <li><strong>合理利用构建缓存</strong>：先 COPY package.json 再 COPY 源码，这样依赖不变时不会重新安装</li>
      <li><strong>使用 .dockerignore</strong>：排除 node_modules、.git 等不需要的文件</li>
    </ol>

    <h2>常用命令速查</h2>

    <pre><code># 构建镜像
docker build -t my-app .

# 运行容器
docker run -d -p 3000:3000 --name my-app my-app

# 查看运行中的容器
docker ps

# 查看容器日志
docker logs my-app

# 进入容器内部
docker exec -it my-app sh

# 停止并删除容器
docker stop my-app && docker rm my-app</code></pre>

    <h2>Docker Compose 实战</h2>
    <p>当应用需要多个服务（如 Web 服务 + 数据库 + Redis）时，Docker Compose 是最方便的选择：</p>

    <pre><code>version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
      - redis
    environment:
      - DB_HOST=db
      - REDIS_HOST=redis

  db:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_PASSWORD=secret

  redis:
    image: redis:7-alpine

volumes:
  pgdata:</code></pre>

    <p>只需一条命令就能启动整个开发环境：</p>
    <pre><code>docker compose up -d</code></pre>

    <h2>开发环境配置技巧</h2>
    <h3>热重载</h3>
    <p>开发时希望代码修改能实时生效，可以通过 volume 挂载源码目录：</p>

    <pre><code>services:
  web:
    build: .
    volumes:
      - ./src:/app/src    # 挂载源码目录
    command: npm run dev  # 使用开发模式启动</code></pre>

    <h3>多阶段构建</h3>
    <p>生产环境的镜像应该尽可能小。使用多阶段构建，可以在一个 Dockerfile 中分离构建环境和运行环境：</p>

    <pre><code># 构建阶段
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 运行阶段
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
EXPOSE 3000
CMD ["node", "dist/server.js"]</code></pre>

    <blockquote>
      <p>Docker 不只是运维的工具，它让每个开发者都能轻松搭建一致的开发环境，消除"环境差异"带来的问题。</p>
    </blockquote>`,
  },
];
