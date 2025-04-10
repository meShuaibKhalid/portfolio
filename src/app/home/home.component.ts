import { Component } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { ProjectsComponent } from '../components/projects/projects.component';

@Component({
  selector: 'app-home',
  imports: [NavComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  TECHNOLOGIES = [
    {
      "category": "Frontend",
      "items": [
        { "name": "JavaScript", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { "name": "TypeScript", "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
        // { "name": "AngularJS", "logo": "https://angular.io/assets/images/logos/angular/angular.svg" },
        { "name": "Angular", "logo": "https://angular.io/assets/images/logos/angular/angular.svg" },
        { "name": "React", "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { "name": "Vue.js", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
        { "name": "Ionic", "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" },
        { "name": "Capacitor", "logo": "https://miro.medium.com/v2/resize:fit:256/1*dumJ6-k3ZENzGWMZSMZokQ.png" },
        { "name": "Cordova", "logo": "https://cordova.apache.org/static/img/cordova_bot.png" },
        { "name": "Sass", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" },
        { "name": "LESS", "logo": "https://upload.wikimedia.org/wikipedia/commons/8/81/LESS_Logo.svg" },
        { "name": "SCSS", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" },
        { "name": "Bootstrap", "logo": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
        { "name": "jQuery", "logo": "https://images.squarespace-cdn.com/content/v1/5d092c5193b409000129adc4/1561345593401-56TBDLFD1465DWK9XBK5/jquery+logo.png" },
        { "name": "PrimeNG", "logo": "https://www.primefaces.org/wp-content/uploads/2018/05/primeng-logo.png" },
        { "name": "Material Design", "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Material_Design_Logo.svg" },
        { "name": "Redux", "logo": "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" },
        { "name": "NgRx", "logo": "https://ngrx.io/assets/images/badge.svg" },
        { "name": "RxJS", "logo": "https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png" },
        { "name": "Chart.js", "logo": "https://www.chartjs.org/media/logo-title.svg" },
        { "name": "Highcharts", "logo": "https://avatars.githubusercontent.com/u/15981345?s=280&v=4" },
        { "name": "Google Charts", "logo": "https://www.insightplatforms.com/wp-content/uploads/2024/01/Google-Charts-Logo-Square-Insight-Platforms-300x300.webp" },
        { "name": "Google Maps", "logo": "https://www.google.com/images/branding/product/2x/maps_96in128dp.png" },
        { "name": "OpenLayers", "logo": "https://openlayers.org/favicon.ico" },
        { "name": "Adobe Illustrator", "logo": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
        { "name": "Adobe Photoshop", "logo": "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
        { "name": "HTML5", "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s" },
        { "name": "CSS3", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
        { "name": "Figma", "logo": "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
        { "name": "Adobe XD", "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" },
        { "name": "Next.js", "logo": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
        { "name": "ESLint", "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" },
        { "name": "Gulp", "logo": "https://upload.wikimedia.org/wikipedia/commons/7/72/Gulp.js_Logo.svg" },
        { "name": "Webpack", "logo": "https://webpack.js.org/assets/icon-square-big.svg" },
        { "name": "Jest", "logo": "https://jestjs.io/img/jest.png" }
      ]
    },
    {
      "category": "Backend",
      "items": [
        { "name": "Node.js", "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { "name": "NestJS", "logo": "https://docs.nestjs.com/assets/logo-small.svg" },
        { "name": ".NET Core Web API", "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" },
        { "name": "LoopBack", "logo": "https://static-00.iconduck.com/assets.00/loopback-icon-895x1024-mbedntit.png" },
        { "name": "Express.js", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
        { "name": "Entity Framework", "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" },
        { "name": "Microservices", "logo": "https://miro.medium.com/v2/resize:fit:1200/1*1hBwhZ--xEVY35z5owT1Qw.jpeg" },
        { "name": "WebRTC", "logo": "https://www.gstatic.com/devrel-devsite/prod/vd31e3ed8994e05c7f2cd0cf68a402ca7902bb92b6ec0977d7ef2a1c699fae3f9/webrtc/images/touchicon-180.png" },
        { "name": "Socket.io", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg" },
        { "name": "Gulp", "logo": "https://upload.wikimedia.org/wikipedia/commons/7/72/Gulp.js_Logo.svg" },
        { "name": "Webpack", "logo": "https://webpack.js.org/assets/icon-square-big.svg" },
        { "name": "Cron Jobs", "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWB3Uyt-Px0R3wXh64Xd4zkr0lZgDkRdfn3iBC2nqb-scLhCDKzygvQ5odQI7esvfGDE&usqp=CAU" },
        { "name": "GraphQL", "logo": "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
        { "name": "Docker", "logo": "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
        { "name": "AWS", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { "name": "Firebase", "logo": "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" },
        { "name": "Redis", "logo": "https://www.tothenew.com/blog/wp-ttn-blog/uploads/2023/09/redis_logo-1.png" }
      ]
    },
    {
      "category": "Databases",
      "items": [
        { "name": "MongoDB", "logo": "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" },
        { "name": "PostgreSQL", "logo": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
        { "name": "MySQL", "logo": "https://www.mysql.com/common/logos/logo-mysql-170x115.png" }
      ]
    }
  ];
}
