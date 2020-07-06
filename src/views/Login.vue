<template>
    <div class='login qc-container qc-align-center'>
        <fluid-anima></fluid-anima>
        <div class='main qc-container qc-align-center'>
            <el-button type='success' @click='login'>登陆</el-button>
        </div>
    </div>
</template>

<script>
/**
 * @description 登陆页面
 */
export default {
    name: 'Login',
    methods: {
        login() {
            sessionStorage.setItem('token', 1)
            this.$router.push({ name: 'main' })
        },
        dataFormatter(data) {
            let data2 = []
            for (let h in data) {
                let cfg = {
                    版本: h,
                    List: []
                }
                let i = data[h]
                for (let j in i) {
                    let cfg2 = {
                        阶段: '',
                        List: []
                    }
                    cfg2['阶段'] = j
                    for (let z in i[j]) {
                        let cfg3 = {
                            name: '',
                            List: []
                        }
                        cfg3.name = z
                        cfg3.List = i[j][z][1]
                        cfg2.List.push(cfg3)
                    }
                    cfg.List.push(cfg2)
                }

                data2.push(cfg)
            }
            return data2
        }
    },
    mounted() {
        let data = {
            'V1.0.1': {
                需求阶段: {
                    需求文档: ['true', []],
                    原型图: ['true', []],
                    业务流程图: ['true', []],
                    UI设计图: ['true', []]
                },
                开发阶段: {
                    前端开发文档: ['true', []],
                    后端开发文档: ['true', []],
                    数据库开发文档: ['true', []]
                },
                测试阶段: {
                    测试报告: ['true', []],
                    测试用例: ['true', []]
                },
                验收阶段: {
                    验收报告: ['true', []]
                },
                发布阶段: {
                    发布报告: ['true', []]
                },
                收尾阶段: {
                    收尾报告: ['true', []]
                }
            },
            'V1.0.0': {
                需求阶段: {
                    需求文档: [
                        'true',
                        [
                            {
                                ID: 77,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: 'tdy测试文档1.pdf',
                                DOCUMENT_VERSION: '20200622151416453',
                                PATH: 'data/upload/document/20200622151416453_tdy测试文档1.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 15:14:16',
                                SYS_DOCUMENT_NAME: '20200622151416453_tdy测试文档1.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 22,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: '测试pdf.pdf',
                                DOCUMENT_VERSION: '202006181835191',
                                PATH: 'data/upload/document/20200618183519_测试pdf.pdf',
                                UPLOADED_BY: '冯晓军',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-18 18:34:49',
                                SYS_DOCUMENT_NAME: '20200618183519_测试pdf.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 23,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: '测试pdf.zip',
                                DOCUMENT_VERSION: '202006181849051',
                                PATH: 'data/upload/document/20200618184905_测试pdf.zip',
                                UPLOADED_BY: '冯晓军',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-18 18:48:34',
                                SYS_DOCUMENT_NAME: '20200618184905_测试pdf.zip',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 73,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME:
                                    '智慧运维公共平台规划讨论和全闭环处理流程模式讨论.pdf',
                                DOCUMENT_VERSION: '20200622150642561',
                                PATH:
                                    'data/upload/document/20200622150642561_智慧运维公共平台规划讨论和全闭环处理流程模式讨论.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 15:06:47',
                                SYS_DOCUMENT_NAME:
                                    '20200622150642561_智慧运维公共平台规划讨论和全闭环处理流程模式讨论.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 74,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: 'tdy测试文档2.pdf',
                                DOCUMENT_VERSION: '20200622150949220',
                                PATH: 'data/upload/document/20200622150949220_tdy测试文档2.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 15:09:49',
                                SYS_DOCUMENT_NAME: '20200622150949220_tdy测试文档2.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 75,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: 'tdy测试文档1.pdf',
                                DOCUMENT_VERSION: '20200622150949223',
                                PATH: 'data/upload/document/20200622150949223_tdy测试文档1.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 15:09:49',
                                SYS_DOCUMENT_NAME: '20200622150949223_tdy测试文档1.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 76,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: 'tdy测试文档2.pdf',
                                DOCUMENT_VERSION: '20200622151416450',
                                PATH: 'data/upload/document/20200622151416450_tdy测试文档2.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 15:14:16',
                                SYS_DOCUMENT_NAME: '20200622151416450_tdy测试文档2.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 24,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: '测试pdf.pdf',
                                DOCUMENT_VERSION: '202006181908581',
                                PATH: 'data/upload/document/20200618190858_测试pdf.pdf',
                                UPLOADED_BY: '冯晓军',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-18 19:08:27',
                                SYS_DOCUMENT_NAME: '20200618190858_测试pdf.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 25,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: '111.pdf',
                                DOCUMENT_VERSION: '202006181909581',
                                PATH: 'data/upload/document/20200618190958_111.pdf',
                                UPLOADED_BY: '冯晓军',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-18 19:09:28',
                                SYS_DOCUMENT_NAME: '20200618190958_111.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 29,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: '111.pdf',
                                DOCUMENT_VERSION: '202006181911461',
                                PATH: 'data/upload/document/20200618191146_111.pdf',
                                UPLOADED_BY: '冯晓军',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-18 19:11:15',
                                SYS_DOCUMENT_NAME: '20200618191146_111.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 30,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: '111.pdf',
                                DOCUMENT_VERSION: '202006181911511',
                                PATH: 'data/upload/document/20200618191151_111.pdf',
                                UPLOADED_BY: '冯晓军',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-18 19:11:20',
                                SYS_DOCUMENT_NAME: '20200618191151_111.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 31,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: 'bigpdf.pdf',
                                DOCUMENT_VERSION: '202006181913231',
                                PATH: 'data/upload/document/20200618191323_bigpdf.pdf',
                                UPLOADED_BY: '冯晓军',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-18 19:12:52',
                                SYS_DOCUMENT_NAME: '20200618191323_bigpdf.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 71,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME:
                                    '智慧运维公共平台规划讨论和全闭环处理流程模式讨论.pdf',
                                DOCUMENT_VERSION: '20200622145258950',
                                PATH:
                                    'data/upload/document/20200622145258950_智慧运维公共平台规划讨论和全闭环处理流程模式讨论.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 14:53:26',
                                SYS_DOCUMENT_NAME:
                                    '20200622145258950_智慧运维公共平台规划讨论和全闭环处理流程模式讨论.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 72,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME:
                                    '智慧运维公共平台规划讨论和全闭环处理流程模式讨论.pdf',
                                DOCUMENT_VERSION: '20200622145644865',
                                PATH:
                                    'data/upload/document/20200622145644865_智慧运维公共平台规划讨论和全闭环处理流程模式讨论.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 14:57:10',
                                SYS_DOCUMENT_NAME:
                                    '20200622145644865_智慧运维公共平台规划讨论和全闭环处理流程模式讨论.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 61,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: '智慧运维逻辑架构V1.pptx',
                                DOCUMENT_VERSION: '202006221117201',
                                PATH: 'data/upload/document/20200622111720_智慧运维逻辑架构V1.pptx',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 11:17:20',
                                SYS_DOCUMENT_NAME: '20200622111720_智慧运维逻辑架构V1.pptx',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 62,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '需求文档',
                                DOCUMENT_NAME: '应急调度前端源代码.zip',
                                DOCUMENT_VERSION: '202006221117391',
                                PATH: 'data/upload/document/20200622111739_应急调度前端源代码.zip',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 11:17:38',
                                SYS_DOCUMENT_NAME: '20200622111739_应急调度前端源代码.zip',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            }
                        ]
                    ],
                    原型图: [
                        'true',
                        [
                            {
                                ID: 32,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '原型图',
                                DOCUMENT_NAME: '归档原型.zip',
                                DOCUMENT_VERSION: '202006181922371',
                                PATH: 'data/upload/document/20200618192237_归档原型.zip',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-18 19:22:07',
                                SYS_DOCUMENT_NAME: '20200618192237_归档原型.zip',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 33,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '原型图',
                                DOCUMENT_NAME: 'Docker从入门到实践 - v1.0.pdf',
                                DOCUMENT_VERSION: '202006181923071',
                                PATH:
                                    'data/upload/document/20200618192307_Docker从入门到实践-v1.0.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-18 19:22:37',
                                SYS_DOCUMENT_NAME: '20200618192307_Docker从入门到实践-v1.0.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            }
                        ]
                    ],
                    业务流程图: [
                        'true',
                        [
                            {
                                ID: 41,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '业务流程图',
                                DOCUMENT_NAME: 'Docker从入门到实践 - v1.0.pdf',
                                DOCUMENT_VERSION: '202006191119301',
                                PATH:
                                    'data/upload/document/20200619111929_Docker从入门到实践-v1.0.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-19 11:18:59',
                                SYS_DOCUMENT_NAME: '20200619111929_Docker从入门到实践-v1.0.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            },
                            {
                                ID: 44,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '业务流程图',
                                DOCUMENT_NAME: 'Nginx.pdf',
                                DOCUMENT_VERSION: '202006191121361',
                                PATH: 'data/upload/document/20200619112136_Nginx.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-19 11:21:06',
                                SYS_DOCUMENT_NAME: '20200619112136_Nginx.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            }
                        ]
                    ],
                    UI设计图: [
                        'true',
                        [
                            {
                                ID: 63,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '需求阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: 'UI设计图',
                                DOCUMENT_NAME: '数据流向图(单图)--应急调度.pdf',
                                DOCUMENT_VERSION: '202006221121051',
                                PATH:
                                    'data/upload/document/20200622112105_数据流向图(单图)--应急调度.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 11:21:04',
                                SYS_DOCUMENT_NAME: '20200622112105_数据流向图(单图)--应急调度.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            }
                        ]
                    ]
                },
                开发阶段: {
                    前端开发文档: [
                        'true',
                        [
                            {
                                ID: 45,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '开发阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '前端开发文档',
                                DOCUMENT_NAME: 'Docker从入门到实践 - v1.0.pdf',
                                DOCUMENT_VERSION: '202006191253431',
                                PATH:
                                    'data/upload/document/20200619125343_Docker从入门到实践-v1.0.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-19 12:53:13',
                                SYS_DOCUMENT_NAME: '20200619125343_Docker从入门到实践-v1.0.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            }
                        ]
                    ],
                    后端开发文档: [
                        'true',
                        [
                            {
                                ID: 34,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '开发阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '后端开发文档',
                                DOCUMENT_NAME: 'Maven实战.pdf',
                                DOCUMENT_VERSION: '202006181927351',
                                PATH: 'data/upload/document/20200618192735_Maven实战.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-18 19:27:05',
                                SYS_DOCUMENT_NAME: '20200618192735_Maven实战.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            }
                        ]
                    ],
                    数据库开发文档: [
                        'true',
                        [
                            {
                                ID: 46,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '开发阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '数据库开发文档',
                                DOCUMENT_NAME: 'Docker从入门到实践 - v1.0.pdf',
                                DOCUMENT_VERSION: '202006191253541',
                                PATH:
                                    'data/upload/document/20200619125354_Docker从入门到实践-v1.0.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-19 12:53:24',
                                SYS_DOCUMENT_NAME: '20200619125354_Docker从入门到实践-v1.0.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            }
                        ]
                    ]
                },
                测试阶段: {
                    测试报告: [
                        'true',
                        [
                            {
                                ID: 78,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '测试阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '测试报告',
                                DOCUMENT_NAME: '数据流向图(单图)--应急调度.pdf',
                                DOCUMENT_VERSION: '20200622160015130',
                                PATH:
                                    'data/upload/document/20200622160015130_数据流向图(单图)--应急调度.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 16:00:14',
                                SYS_DOCUMENT_NAME:
                                    '20200622160015130_数据流向图(单图)--应急调度.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            }
                        ]
                    ],
                    测试用例: ['true', []]
                },
                验收阶段: {
                    验收报告: [
                        'true',
                        [
                            {
                                ID: 79,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '验收阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '验收报告',
                                DOCUMENT_NAME: '数据流向图(单图)--叮当20200611.pdf',
                                DOCUMENT_VERSION: '20200622160241739',
                                PATH:
                                    'data/upload/document/20200622160241739_数据流向图(单图)--叮当20200611.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 16:02:41',
                                SYS_DOCUMENT_NAME:
                                    '20200622160241739_数据流向图(单图)--叮当20200611.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            }
                        ]
                    ]
                },
                发布阶段: {
                    发布报告: [
                        'true',
                        [
                            {
                                ID: 80,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '发布阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '发布报告',
                                DOCUMENT_NAME: '数据流向图(单图)--叮当20200611.pdf',
                                DOCUMENT_VERSION: '20200622160252721',
                                PATH:
                                    'data/upload/document/20200622160252721_数据流向图(单图)--叮当20200611.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 16:02:52',
                                SYS_DOCUMENT_NAME:
                                    '20200622160252721_数据流向图(单图)--叮当20200611.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            }
                        ]
                    ]
                },
                收尾阶段: {
                    收尾报告: [
                        'true',
                        [
                            {
                                ID: 81,
                                PROJECT_SHORT: '叮当普查',
                                STAGE: '收尾阶段',
                                MAJOR: '后台管理员',
                                CATEGORY: '收尾报告',
                                DOCUMENT_NAME: '数据流向图(单图)--叮当20200611.pdf',
                                DOCUMENT_VERSION: '20200622160302674',
                                PATH:
                                    'data/upload/document/20200622160302674_数据流向图(单图)--叮当20200611.pdf',
                                UPLOADED_BY: '后台管理员',
                                SCORE: null,
                                RATER: null,
                                CLICKS: null,
                                CREATE_DATE: '2020-06-22 16:03:02',
                                SYS_DOCUMENT_NAME:
                                    '20200622160302674_数据流向图(单图)--叮当20200611.pdf',
                                PROJECT_VERSION: 'V1.0.0',
                                TERMINAL_TYPE: 'Web'
                            }
                        ]
                    ]
                }
            }
        }
        console.log(data)
        let dataChange = this.dataFormatter(data)
        console.log(dataChange)
    }
}
</script>

<style lang='less'>
.login {
    .main {
        position: absolute;
        width: 400px;
        height: 300px;
        background-color: transparent;
    }
}
</style>