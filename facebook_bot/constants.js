const BOT_REPLY_TYPE = {
        TEXT: 'TEXT',
        POST: 'POST',
        BUTTONS: 'BUTTONS',
        IMAGE: 'IMAGE',
        VIDEOS: 'VIDEOS'
};

const BUTTON_TYPE = {
    WEB_URL : 'web_url',
    POSTBACK : 'postback'
};

const PAYLOAD = {
    TECHNICAL_POST: 'TECHNICAL_POST',
    CAREER_POST: 'CAREER_POST',
    GENERIC_POST: 'GENERIC_POST',
    HELP : 'HELP',
    SEE_CATEGORIES: 'SEE_CATEGORIES',
    GIRL : 'GIRL',
    GIRL_SEXY : 'GIRL_SEXY'
};

const PAGE_TAGS = [{
    "slug": "series-javascript-sida",
    "name": "series javascript sida"
}, {
    "slug": "dependency-inversion",
    "name": "dependency inversion"
}, {
    "slug": "inversion-of-control",
    "name": "inversion of control"
}, {
    "slug": "dependency-injection",
    "name": "dependency injection"
}, {
    "slug": "front-end-developer",
    "name": "front-end developer"
}, {
    "slug": "front-end-developer",
    "name": "front end developer"
}, {
    "slug": "phan-phac-qui-chan",
    "name": "phản phác quy chân"
}, {
    "slug": "phan-phac-qui-chan",
    "name": "phản phác qui chân"
}, {
    "slug": "series-c-hay-ho",
    "name": "series C# hay ho"
}, {
    "slug": "project-manager",
    "name": "project manager"
}, {
    "slug": "javascript-sida",
    "name": "Javascript sida"
}, {
    "slug": "lap-trinh-vien",
    "name": "lập trình viên"
}, {
    "slug": "truong-dai-hoc",
    "name": "trường đại học"
}, {
    "slug": "lap-trinh-web",
    "name": "lập trình web"
}, {
    "slug": "visual-studio",
    "name": "visual studio"
}, {
    "slug": "web-developer",
    "name": "web developer"
}, {
    "slug": "stackoverflow",
    "name": "stackoverflow"
}, {
    "slug": "kinh-nghiem",
    "name": "kinh nghiệm"
}, {
    "slug": "nghe-nghiep",
    "name": "nghề nghiệp"
}, {
    "slug": "programming",
    "name": "programming"
}, {
    "slug": "review-sach",
    "name": "review sách"
}, {
    "slug": "javascript",
    "name": "javascript"
}, {
    "slug": "programmer",
    "name": "programmer"
}, {
    "slug": "mobile-app",
    "name": "mobile app"
}, {
    "slug": "lancaster",
    "name": "lancaster"
}, {
    "slug": "c-hay-ho",
    "name": "c# hay ho"
}, {
    "slug": "architect",
    "name": "architect"
}, {
    "slug": "phong-van",
    "name": "phỏng vấn"
}, {
    "slug": "unit-test",
    "name": "unit test"
}, {
    "slug": "huong-dan",
    "name": "hướng dẫn"
}, {
    "slug": "code-cung",
    "name": "code cứng"
}, {
    "slug": "technical",
    "name": "technical"
}, {
    "slug": "sinh-vien",
    "name": "sinh viên"
}, {
    "slug": "lap-trinh",
    "name": "lập trình"
}, {
    "slug": "tieng-anh",
    "name": "tiếng Anh"
}, {
    "slug": "interview",
    "name": "interview"
}, {
    "slug": "developer",
    "name": "developer"
}, {
    "slug": "thoi-quen",
    "name": "thói quen"
}, {
    "slug": "interface",
    "name": "interface"
}, {
    "slug": "front-end",
    "name": "front-end"
}, {
    "slug": "angularjs",
    "name": "angularjs"
}, {
    "slug": "cong-nghe",
    "name": "công nghệ"
}, {
    "slug": "ung-dung",
    "name": "ứng dụng"
}, {
    "slug": "xin-viec",
    "name": "xin việc"
}, {
    "slug": "viec-lam",
    "name": "việc làm"
}, {
    "slug": "database",
    "name": "database"
}, {
    "slug": "lam-viec",
    "name": "làm việc"
}, {
    "slug": "doc-sach",
    "name": "đọc sách"
}, {
    "slug": "ngon-ngu",
    "name": "ngôn ngữ"
}, {
    "slug": "thu-vien",
    "name": "thư viện"
}, {
    "slug": "function",
    "name": "function"
}, {
    "slug": "dai-hoc",
    "name": "đại học"
}, {
    "slug": "chia-se",
    "name": "chia sẻ"
}, {
    "slug": "project",
    "name": "project"
}, {
    "slug": "testing",
    "name": "testing"
}, {
    "slug": "program",
    "name": "program"
}, {
    "slug": "hoc-tap",
    "name": "học tập"
}, {
    "slug": "c-net",
    "name": "c#.net"
}, {
    "slug": "series",
    "name": "series"
}, {
    "slug": "coding",
    "name": "coding"
}, {
    "slug": "mobile",
    "name": "mobile"
}, {
    "slug": "design",
    "name": "design"
}, {
    "slug": "du-hoc",
    "name": "du học"
}, {
    "slug": "senior",
    "name": "senior"
}, {
    "slug": "junior",
    "name": "junior"
}, {
    "slug": "review",
    "name": "review"
}, {
    "slug": "jquery",
    "name": "jquery"
}, {
    "slug": "google",
    "name": "google"
}, {
    "slug": "object",
    "name": "object"
}, {
    "slug": "ebook",
    "name": "ebook"
}, {
    "slug": "solid",
    "name": "solid"
}, {
    "slug": "coder",
    "name": "coder"
}, {
    "slug": "java",
    "name": "java"
}, {
    "slug": "html",
    "name": "html"
}, {
    "slug": "blog",
    "name": "blog"
}, {
    "slug": "book",
    "name": "book"
}, {
    "slug": "sach",
    "name": "sách"
}, {
    "slug": "code",
    "name": "code"
}, {
    "slug": "linq",
    "name": "linq"
}, {
    "slug": "mvc",
    "name": "mvc"
}, {
    "slug": "sql",
    "name": "sql"
}, {
    "slug": "oop",
    "name": "oop"
}, {
    "slug": "ioc",
    "name": "ioc"
}, {
    "slug": "css",
    "name": "css"
}, {
    "slug": "ide",
    "name": "ide"
}, {
    "slug": "fpt",
    "name": "fpt"
}, {
    "slug": "web",
    "name": "web"
}, {
    "slug": "c",
    "name": "c#"
}, {
    "slug": "js",
    "name": "js"
}, {
    "slug": "c",
    "name": "c #"
}, {
    "slug": "php",
    "name": "PHP"
}];

module.exports = { BOT_REPLY_TYPE, BUTTON_TYPE, PAYLOAD, PAGE_TAGS }