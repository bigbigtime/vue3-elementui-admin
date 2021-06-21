import { ElCascader, ElCascaderPanel, ElSlider, ElButton, ElSwitch, ElTree, ElForm, ElFormItem, ElInput, ElSelect, ElCol , ElRow, ElMessage, ElMessageBox, ElContainer, ElAside, ElHeader,ElMain, ElMenu, ElMenuItem, ElSubmenu, ElOption, ElTable, ElTableColumn, ElPagination, ElInputNumber, ElUpload, ElDatePicker, ElRadio, ElRadioGroup} from 'element-plus';
// 设置语言
import lang from 'element-plus/lib/locale/lang/zh-cn';
import locale from 'element-plus/lib/locale';
locale.use(lang)
// 导出
export default (app) => {
    app.use(ElCascaderPanel);
    app.use(ElCascader);
    app.use(ElButton);
    app.use(ElSwitch);
    app.use(ElForm);
    app.use(ElFormItem);
    app.use(ElInput);
    app.use(ElCol);
    app.use(ElRow);
    app.use(ElMessage);
    app.use(ElMessageBox);
    app.use(ElContainer);
    app.use(ElAside);
    app.use(ElHeader);
    app.use(ElMain);
    app.use(ElMenu);
    app.use(ElMenuItem);
    app.use(ElSubmenu);
    app.use(ElSlider);
    app.use(ElSelect);
    app.use(ElOption);
    app.use(ElTable);
    app.use(ElTableColumn);
    app.use(ElPagination);
    app.use(ElTree);
    app.use(ElInputNumber);
    app.use(ElUpload);
    app.use(ElDatePicker);
    app.use(ElRadio);
    app.use(ElRadioGroup);
}