import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, debounceTime, fromEvent, Subject, takeUntil } from 'rxjs';


export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: any;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  items?: any;
}

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }
  MENUITEMS: Menu[] = [
    {
    title: 'Dashboard',
    selected: false,
    icon: 'home',
    type: 'sub',
    Menusub: true,
    active: false
   },
   {
    title: 'User Management',
    selected: false,
    icon: 'users',
    type: 'sub',
    Menusub: true,
    active: false,
    children: [
      {
        path: '/user-management/role',
        title: 'Role',
        type: 'link',
        selected: false,
      },
      {
        path: '/user-management/user',
        title: 'User',
        type: 'link',
        selected: false,
      },
      {
        path: '/user-management/permission',
        title: 'Role Permission',
        type: 'link',
        selected: false,
      }
    ]
  },
   {
    title: 'Master Data',
    selected: false,
    icon: 'box',
    type: 'sub',
    Menusub: true,
    active: false,
    children: [
      {
        path: '/master-data/institute',
        title: 'Institute',
        type: 'link',
        selected: false,
      },
      {
        path: '/master-data/institute-branch',
        title: 'Institute Branch',
        type: 'link',
        selected: false,
      },
      {
        path: '/master-data/class',
        title: 'Class',
        type: 'link',
        selected: false,
      },
      {
        path: '/master-data/course',
        title: 'Course',
        type: 'link',
        selected: false,
      },
      {
        path: '/master-data/payment-types',
        title: 'Payment Types',
        type: 'link',
        selected: false,
      }
    ]
    },
    {
      title: 'Term Screen',
      selected: false,
      icon: 'command',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/term-screen/term',
          title: 'Term',
          type: 'link',
          selected: false,
        }
      ]
    },
    {
      title: 'Approval Mechanism',
      selected: false,
      icon: 'lock',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        // {
        //   path: '/approval-mechanism/for-approval',
        //   title: 'For Approval',
        //   type: 'link',
        //   selected: false,
        // },
        {
          path: '/approval-mechanism/approval-configuration',
          title: 'Approval Configuration',
          type: 'link',
          selected: false,
        },
        {
          path: '/approval-mechanism/approval',
          title: 'Approval',
          type: 'link',
          selected: false,
        }
      ]
    },
    {
      title: 'Student Registration',
      selected: false,
      icon: 'user',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/registration/student',
          title: 'Registration',
          type: 'link',
          selected: false,
        },
        {
          path: '/registration/student-list',
          title: 'Student List',
          type: 'link',
          selected: false,
        }
      ]
    },
    {
      title: 'Finance',
      selected: false,
      icon: 'user',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/finance/new-students',
          title: 'New Students',
          type: 'link',
          selected: false,
        }
      ]
    },
    {
      title: 'IT',
      selected: false,
      icon: 'user',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/it/new-students',
          title: 'New Students',
          type: 'link',
          selected: false,
        }
      ]
    }
  ]
  MENUITEMS2: Menu[] = [
    {
      title: 'Dashboard',
      selected: false,
      icon: 'home',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/dashboard/sales-dashboard',
          title: 'Sales Dashboard',
          type: 'link',
          selected: false,
        },
        {
          path: '/dashboard/marketing-dashboard',
          title: 'Marketing Dashboard',
          type: 'link',
          selected: false,
        },
        {
          path: '/dashboard/app-dashboard',
          title: 'App Dashboard',
          type: 'link',
          selected: false,
        },
        {
          path: '/dashboard/lms-dashboard',
          title: 'Lms Dashboard',
          type: 'link',
          selected: false,
        },
        {
          path: '/dashboard/analytics-dashboard',
          title: 'Analytics Dashboard',
          type: 'link',
          selected: false,
        },
      ],
    },
    //landing-page

    //advance ui
    {
      title: 'Advance UI',
      selected: false,
      icon: 'box',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/advanced-ui/accordion',
          title: 'accordion',
          type: 'link',
          selected: false,
        },
        {
          path: '/advanced-ui/carousel',
          title: 'carousel',
          type: 'link',
          selected: false,
        },
        {
          path: '/advanced-ui/collapse',
          title: 'collapse',
          type: 'link',
          selected: false,
        },
        {
          path: '/advanced-ui/modal',
          title: 'modal',
          type: 'link',
          selected: false,
        },
        {
          path: '/advanced-ui/counters',
          title: 'Counter',
          type: 'link',
          selected: false,
        },
        {
          path: '/advanced-ui/sweet-alert',
          title: 'sweet-alert',
          type: 'link',
          selected: false,
        },
        {
          path: '/advanced-ui/ratings',
          title: 'ratings',
          type: 'link',
          selected: false,
        },
        {
          path: '/advanced-ui/search',
          title: 'Search',
          type: 'link',
          selected: false,
        },
        {
          path: '/advanced-ui/userlist',
          title: 'Userlist',
          type: 'link',
          selected: false,
        },
        {
          title: 'Blog-pages',
          type: 'sub',
          active: false,
          Menusub: true,
          children: [
            {
              path: '/advanced-ui/Blog-pages/Blog',
              title: 'Blog',
              type: 'link',
            },
            {
              path: '/advanced-ui/Blog-pages/Blog-details',
              title: 'Blog-details',
              type: 'link',
            },
            {
              path: '/advanced-ui/Blog-pages/edit-post',
              title: 'Edit-post',
              type: 'link',
            },
          ],
        },
      ],
    },

    {
      path: '/landing-page',
      icon: 'zap',
      title: 'Landing Page',
      type: 'external',
      badgeClass:
        'badge bg-dark br-5 side-badg, selected: falsee blink-text pb-1',
      badgeValue: 'New',
    },

    

    {
      title: 'Elements',
      selected: false,
      icon: 'database',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/elements/alerts',
          title: 'Alerts',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/buttons',
          title: 'Buttons',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/dropdowns',
          title: 'Dropdowns',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/avatar',
          title: 'Avatar',
          type: 'link',
          selected: false,
        },

        {
          path: '/elements/list-group',
          title: 'List group',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/tags',
          title: 'Tags',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/toast',
          title: 'Toast',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/pagination',
          title: 'Pagination',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/navigation',
          title: 'Navigation',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/typography',
          title: 'Typography',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/Popover',
          title: 'Popover',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/progress',
          title: 'Progress',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/spinners',
          title: 'Spinner',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/breadcrumbs',
          title: 'Breadcrumbs',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/badges',
          title: 'Badges',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/media-object',
          title: 'Media Objects',
          type: 'link',
          selected: false,
        },
        {
          path: '/elements/tooltip',
          title: 'ToolTip',
          type: 'link',
          selected: false,
        },

        {
          path: '/elements/thumbnails',
          title: 'Thumnails',
          type: 'link',
          selected: false,
        },
      ],
    },

    {
      title: 'Apps',
      selected: false,
      icon: 'download',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/apps/cards',
          title: 'Cards',
          type: 'link',
          selected: false,
        },
     
        {
          path: '/apps/content-scrollbar',
          title: 'Content Scrollbar',
          type: 'link',
          selected: false,
        },
        {
          path: '/apps/range-slider',
          title: 'Range Slider',
          type: 'link',
          selected: false,
        },
        {
          path: '/apps/calendar',
          title: 'Calender',
          type: 'link',
          selected: false,
        },
        {
          path: '/apps/contacts',
          title: 'Contacts',
          type: 'link',
          selected: false,
        },
        {
          path: '/apps/image-compare',
          title: 'Image Compare',
          type: 'link',
          selected: false,
        },
        {
          path: '/apps/notification',
          title: 'Notification',
          type: 'link',
          selected: false,
        },
        {
          path: '/apps/widget-notification',
          title: 'Widgets Notification',
          type: 'link',
          selected: false,
        },
        {
          path: '/apps/treeview',
          title: 'Treeview',
          type: 'link',
          selected: false,
        },
        {
          path: '/apps/widgets',
          title: 'Widgets',
          type: 'link',
          selected: false,
        },
        // {
        //   path: '/apps/map-leaflet',
        //   title: 'Leaflet Maps',
        //   type: 'link',
        // },
        {
          title: 'Mails',
          type: 'sub',
          active: false,
          Menusub: true,
          children: [
            { path: '/apps/mail/chat', title: 'chat', type: 'link' },
            {
              path: '/apps/mail/mail',
              title: 'Mail',
              type: 'link',
            },
            {
              path: '/apps/mail/mail-compose',
              title: 'Mail-Compose',
              type: 'link',
            },
            {
              path: '/apps/mail/mail-setting',
              title: 'Mail-settings',
              type: 'link',
            },

            { path: '/apps/mail/read-mail', title: 'read-mail', type: 'link' },
          ],
        },
        {
          title: 'File Manager',
          type: 'sub',
          active: false,
          Menusub: true,
          children: [
            {
              path: '/apps/file-manager/file-manager',
              title: 'File Manager',
              type: 'link',
            },
            {
              path: '/apps/file-manager/file-manager-list',
              title: 'File Manager List',
              type: 'link',
            },
            {
              path: '/apps/file-manager/file-manager-details',
              title: 'File Manager Details',
              type: 'link',
            },
            {
              path: '/apps/file-manager/file-attachments',
              title: 'File Manager Attachements',
              type: 'link',
            },
          ],
        },
      ],
    },
    {
      title: 'Forms',
      selected: false,
      icon: 'file',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/forms/advanced-forms',
          title: 'advanced-forms',
          type: 'link',
          selected: false,
        },
        {
          path: '/forms/form-elements',
          title: 'Form Elements',
          type: 'link',
          selected: false,
        },
        {
          path: '/forms/form-layouts',
          title: 'Form Layouts',
          type: 'link',
          selected: false,
        },
        {
          path: '/forms/form-wizards',
          title: 'Form wizard',
          type: 'link',
          selected: false,
        },
        {
          path: '/forms/form-validation',
          title: 'Form Validation',
          type: 'link',
          selected: false,
        },
        {
          path: '/forms/form-sizes',
          title: 'Form sizes',
          type: 'link',
          selected: false,
        },
        {
          path: '/forms/form-editors',
          title: 'form-editors',
          type: 'link',
          selected: false,
        },
      ],
    },
    {
      title: 'Charts',
      selected: false,
      icon: 'slack',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/charts/apex-charts',
          title: 'Apex-charts',
          type: 'link',
          selected: false,
        },
        {
          path: '/charts/chartjs',
          title: 'Chart-js',
          type: 'link',
          selected: false,
        },
        {
          path: '/charts/e-charts',
          title: 'Echarts',
          type: 'link',
          selected: false,
        },
      ],
    },

    {
      title: 'Pages',
      selected: false,
      icon: 'layers',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/pages/profile',
          title: 'Profile',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/edit-profile',
          title: 'Edit profile',
          type: 'link',
          selected: false,
        },

        {
          path: '/pages/about-us',
          title: 'About Us',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/company-history',
          title: 'Company History',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/crypto',
          title: 'Crypto ',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/terms-condition',
          title: 'Terms Condition',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/settings',
          title: 'Settings',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/invoice',
          title: 'Invoice',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/pricing',
          title: 'Pricing ',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/panel',
          title: 'Panel',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/gallery',
          title: 'Gallery',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/Todotask',
          title: 'TOdotask',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/faqs',
          title: 'FAQS',
          type: 'link',
          selected: false,
        },
        {
          path: '/pages/empty-page',
          title: 'Empty Page',
          type: 'link',
          selected: false,
        },
        {
          path: '/switcher-1',
          title: 'Switcher-1',
          type: 'link',
          selected: false,
        },
        {
          title: 'Tables',
          selected: false,
          icon: 'slack',
          type: 'sub',
          Menusub: true,
          active: false,
          children: [
            {
              path: '/pages/tables/basic-table',
              title: 'Basic table',
              type: 'link',
              selected: false,
            },
            {
              path: '/pages/tables/data-tables',
              title: 'Data tables',
              type: 'link',
              selected: false,
            },
            {
              path: '/pages/tables/edit-tables',
              title: 'Edit tables',
              type: 'link',
              selected: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Icons',
      selected: false,
      icon: 'wind',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/icons/font-awesome',
          title: 'Font Awesome',
          type: 'link',
          selected: false,
        },
        {
          path: '/icons/materialdesign-icons',
          title: 'Material Design Icons',
          type: 'link',
          selected: false,
        },
        {
          path: '/icons/simpleline-icons',
          title: 'Simple Line Icons',
          type: 'link',
          selected: false,
        },
        {
          path: '/icons/feather-icons',
          title: 'Feather Icons',
          type: 'link',
          selected: false,
        },
        {
          path: '/icons/Ionic-Icons',
          title: 'lonic-Icons',
          type: 'link',
          selected: false,
        },
        {
          path: '/icons/flag-icons',
          title: 'Flag Icons',
          type: 'link',
          selected: false,
        },
        {
          path: '/icons/pe7-icons',
          title: 'pe7 Icons',
          type: 'link',
          selected: false,
        },
        {
          path: '/icons/themify-icons',
          title: 'Themify Icons',
          type: 'link',
          selected: false,
        },
        {
          path: '/icons/typicons-icons',
          title: 'Typicons Icons',
          type: 'link',
          selected: false,
        },
        {
          path: '/icons/weather-icons',
          title: 'Weather Icons',
          type: 'link',
          selected: false,
        },
        {
          path: '/icons/bootstrap-icons',
          title: 'Bootstrap Icons',
          type: 'link',
          selected: false,
        },
      ],
    },

    {
      title: 'E-commerce',
      selected: false,
      icon: 'shopping-cart',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/ecommerce/products',
          title: 'Products',
          type: 'link',
          selected: false,
        },
        {
          path: '/ecommerce/product-details',
          title: 'Product Details',
          type: 'link',
          selected: false,
        },
        {
          path: '/ecommerce/cart',
          title: 'Cart',
          type: 'link',
          selected: false,
        },
        {
          path: '/ecommerce/check-out',
          title: 'check-out',
          type: 'link',
          selected: false,
        },
        {
          path: '/ecommerce/wish-list',
          title: 'Wish List',
          type: 'link',
          selected: false,
        },
      ],
    },

    {
      title: 'Utilities',
      selected: false,
      icon: 'underline',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/utilities/Background',
          title: 'Background',
          type: 'link',
          selected: false,
        },
        {
          path: '/utilities/borders',
          title: 'Borders',
          type: 'link',
          selected: false,
        },
        {
          path: '/utilities/display',
          title: 'Display',
          type: 'link',
          selected: false,
        },
        {
          path: '/utilities/flex',
          title: 'Flex',
          type: 'link',
          selected: false,
        },
        {
          path: '/utilities/height',
          title: 'Height',
          type: 'link',
          selected: false,
        },
        {
          path: '/utilities/margin',
          title: 'Margin',
          type: 'link',
          selected: false,
        },
        {
          path: '/utilities/padding',
          title: 'Padding',
          type: 'link',
          selected: false,
        },
        {
          path: '/utilities/position',
          title: 'Position',
          type: 'link',
          selected: false,
        },
        {
          path: '/utilities/width',
          title: 'Width',
          type: 'link',
          selected: false,
        },
        {
          path: '/utilities/extras',
          title: 'Extras',
          type: 'link',
          selected: false,
        },
      ],
    },

    {
      title: 'Custom Pages',
      selected: false,
      icon: 'target',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/custompages/login',
          title: 'Login',
          type: 'link',
          selected: false,
        },
        {
          path: '/custompages/register',
          title: 'Register',
          type: 'link',
          selected: false,
        },
        {
          path: '/custompages/forgot-password',
          title: 'Forgot Password',
          type: 'link',
          selected: false,
        },
        {
          path: '/custompages/lockscreen',
          title: 'Lock-screen',
          type: 'link',
          selected: false,
        },
        {
          path: '/custompages/underconstruction',
          title: 'Under Construction',
          type: 'link',
          selected: false,
        },
        {
          path: '/custompages/error401',
          title: 'Error-401',
          type: 'link',
          selected: false,
        },
        {
          path: '/custompages/error403',
          title: 'Error-403',
          type: 'link',
          selected: false,
        },
        {
          path: '/custompages/error404',
          title: 'Error-404',
          type: 'link',
          selected: false,
        },
        {
          path: '/custompages/error500',
          title: 'Error-500',
          type: 'link',
          selected: false,
        },
        {
          path: '/custompages/error503',
          title: 'Error-503',
          type: 'link',
          selected: false,
        },
      ],
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
