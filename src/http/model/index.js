import BaseApi from '../base'
const COMMON_PATH = '/model'
// 因为和接口通用的header不一致
const P_CONSTENT_TYPE = 'application/json;charset=UTF-8'
const headers = {
  'Content-Type': P_CONSTENT_TYPE,
}

class ModelApi extends BaseApi {
  templateExport() {
    /**
     * 模板导出
     */
    return this.getWithoutError(`${COMMON_PATH}/excel/exportTemplate`,{
      responseType: 'blob',
    })
  }
  getDataType() {
    /**
     * 字段类型枚举
     */
    return this.get(`${COMMON_PATH}/normModel/getDataType`)
  }
  getNormType() {
    /**
     * 指标枚举
     */
    return this.get(`${COMMON_PATH}/normModel/getNormType`)
  }
  getFuncType() {
    /**
     * 函数枚举
     */
    return this.get(`${COMMON_PATH}/normModel/getFuncType`)
  }
  getMediumEnum() {
    /**
     * 数据类型枚举
     */
    return this.get(`${COMMON_PATH}/normModel/getMediumEnum`)
  }
  getModelStatusEnum() {
    /**
     * 模型状态枚举
     */
    return this.get(`${COMMON_PATH}/normModel/getModelStatusEnum`)
  }
  getAttributeEnumType() {
    /**
     * 最小时间粒度枚举
     */
    return this.get(`${COMMON_PATH}/normModel/getAttributeEnumType`)
  }
  getLevelEnum() {
    /**
     * 模型层次
     */
    return this.get(`${COMMON_PATH}/normModel/getLevelEnum`)
  }
  evaluation(data) {
    /**
     * 评审
     * @param data: {
     *  id {String}
     *  comments {String}
     *  modelStatus {String}
     * }
     */
    return this.get(`${COMMON_PATH}/modelList/evaluation`, { params: data })
  }
  // save(data) {
  //   /**
  //    * 保存
  //    */
  //   return this.post(`${COMMON_PATH}/modelList/saveFullView`, data, { headers })
  // }
  updateFullView(data) {
    /**
     * 保存
     */
    return this.post(`${COMMON_PATH}/modelList/updateFullViewForNew`, data, {
      headers,
    })
  }
  list(data) {
    /**
     * 模型列表
     * @param data: {
     *  page
     * }
     */
    return this.post(`${COMMON_PATH}/modelList/select`, data)
  }
  delTableByID(data) {
    /**
     * 删除
     * @param data: {
     *  id
     * }
     */
    return this.get(`${COMMON_PATH}/modelList/delTableByID`, {
      params: data,
    })
  }
  selectByOne(data) {
    /**
     * 根据表id获取表
     * @param data: {
     *  modelId
     * }
     */
    return this.post(`${COMMON_PATH}/modelList/selectByOne`, data)
  }
  accessRelationshipMethodByModelId(data) {
    /**
     * 编辑的时候根据表id获取依赖的表
     * @param data: {
     *  modelID
     * }
     */
    return this.get(
      `${COMMON_PATH}/modelList/accessRelationshipMethodByModelId`,
      { params: data },
    )
  }
  getAllFieldsDepVo(data) {
    /**
     * 编辑的时候根据表id获取依赖字段
     * @param data: {
     *  modelID
     * }
     */
    return this.get(`${COMMON_PATH}/modelList/getAllFieldsDepVo`, {
      params: data,
    })
  }
  getTableStorageMediumDo(data) {
    /**
     * 编辑的时候根据表id获取依赖字段
     * @param data: {
     *  modelID: id
     *  modelVersion: 版本号
     * }
     */
    return this.get(`${COMMON_PATH}/modelList/getTableStorageMediumDo`, {
      params: data,
    })
  }
  topologyRelationsForField(data) {
    /**
     * 获取字段的依赖拓扑图
     * @param data: {
     *  fieldsId: id
     * }
     */
    return this.get(`${COMMON_PATH}/modelList/topologyRelationsForField`, {
      params: data,
    })
  }
  topologyRelationsForTable(data) {
    /**
     * 获取表的依赖拓扑图
     * @param data: {
     *  modelID: id
     * }
     */
    return this.get(`${COMMON_PATH}/modelList/topologyRelationsForTable`, {
      params: data,
    })
  }
  getTableInfo(data) {
    /**
     * 获取该表的信息
     * @param data: {
     *  modelID: id
     * }
     */
    return this.get(`${COMMON_PATH}/basicTable/show`, {
      params: data,
    })
  }
  save(data) {
    /**
     * 保存表的基本信息
     */
    return this.post(`${COMMON_PATH}/basicTable/save`, data, { headers })
  }
  update(data) {
    /**
     * 更新表的基本信息
     */
    return this.post(`${COMMON_PATH}/basicTable/update`, data, { headers })
  }
  fieldsAndDependencySave(data) {
    /**
     * 保存表的依赖表和字段
     */
    return this.post(`${COMMON_PATH}/fieldsAndDependency/save`, data, {
      headers,
    })
  }
  fieldsAndDependencyUpdate(data) {
    /**
     * 更新表的依赖表和字段
     */
    return this.post(`${COMMON_PATH}/fieldsAndDependency/update`, data, {
      headers,
    })
  }
  exportFile(data) {
    /**
     * 单文件导出
     * @param data: {
     *  modelId
     * }
     */
    return this.getWithoutError(`${COMMON_PATH}/basicTable/exportFile`, {
      params: data,
      responseType: 'blob',
      withCredentials: true,
    })
  }
  importFile(data) {
    return this.postWithoutError(`${COMMON_PATH}/excel/importFile`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }
  repetitionGetDuplication(data) {
    /**
     * 获取应用表重复度数组
     * @param data: {
     * 
     * }
     */
    return this.get(`${COMMON_PATH}/basicTable/getDuplication`, {
      params: data,
    })
  }
  repetitionGetCrossRepeat(data) {
    /**
     * 获取重复表
     * @param data: {
     * 
     * }
     */
    return this.get(`${COMMON_PATH}/basicTable/getCrossRepeat`, {
      params: data,
    })
  }
}


export default new ModelApi()
