import Mock from 'mockjs'
import { builder, getBody } from '../util'

const testChange = () => {
    return builder([
        {
            key:'0-0',
            title:"LTE报表汇总",
            children:[
                {
                    key:'0-0-0',
                    title:"LTE小区性能表1",
                    children:[
                        {
                            key:"0-0-0-0",
                            title:"LTE小区性能报表2"
                        },
                        {
                            key:"0-0-0-1",
                            title:"LTE小区性能报表3"
                        },
                        {
                            key:"0-0-0-2",
                            title:"LTE小区性能报表4"
                        }
                    ]
                },
                {
                    key:'0-0-1',
                    title:"LTE小区性能表1",
                    children:[
                        {
                            key:"0-0-1-0",
                            title:"LTE小区性能报表2"
                        },
                        {
                            key:"0-0-1-1",
                            title:"LTE小区性能报表3"
                        },
                        {
                            key:"0-0-1-2",
                            title:"LTE小区性能报表4"
                        }
                    ]
                },
                {
                    key:'0-0-2',
                    title:"LTE小区性能表1",
                    children:[
                        {
                            key:"0-0-2-0",
                            title:"LTE小区性能报表2"
                        },
                        {
                            key:"0-0-2-1",
                            title:"LTE小区性能报表3"
                        },
                        {
                            key:"0-0-2-2",
                            title:"LTE小区性能报表4"
                        }
                    ]
                }
            ]
        }
    ], '', 200)
}
const searchData = () => {
    return builder( {
        title:  [
            {
                title: "序号",
                dataIndex: '序号',
                key: '序号',
            },
            {
                title: '表名',
                dataIndex: '表名',
            }, {
                title: '字段',
                dataIndex: '字段',
            },
            {
                title: '字段别名',
                dataIndex: '字段别名',
            },
            {
                title: '算法',
                dataIndex: '算法',
            },
            {
                title: '汇总方式',
                dataIndex: '汇总方式',
            },
            {
                title: '条件规则',
                dataIndex: '条件规则',
            },
        ],
        data: [
            {
                tableCode:"测试表格",
                fileCode:"time",
                fileAlias:"时间",
                showNo:"1",
                fileOriginal:"1",
                fileMethod:"count",
                fileAliasCode:"",
                sizeFileType:"粒度字段类型"
            },
            {
                tableCode:"测试表格",
                fileCode:"city",
                fileAlias:"地市",
                showNo:"2",
                fileOriginal:"1",
                fileMethod:"count",
                fileAliasCode:"",
                sizeFileType:"粒度字段类型"
            },
            {
                tableCode:"测试表格",
                fileCode:"area",
                fileAlias:"区域",
                showNo:"3",
                fileOriginal:"1",
                fileMethod:"count",
                fileAliasCode:"",
                sizeFileType:"粒度字段类型"
            },
            {
                tableCode:"测试表格",
                fileCode:"adress",
                fileAlias:"地址",
                showNo:"4",
                fileOriginal:"1",
                fileMethod:"count",
                fileAliasCode:"",
                sizeFileType:"粒度字段类型"
            },
            {
                tableCode:"测试表格",
                fileCode:"type",
                fileAlias:"测试数据",
                showNo:"5",
                fileOriginal:"1",
                fileMethod:"count",
                fileAliasCode:"",
                sizeFileType:"粒度字段类型"
            },
        ]
    },'', 200)
}
Mock.mock(/\/complex\/queryComplex/, 'post', testChange)
Mock.mock(/\/complex\/queryTable/, 'post', searchData)
