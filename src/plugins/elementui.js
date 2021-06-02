import { ElSlider, ElButton, ElSwitch, ElForm, ElFormItem, ElInput, ElSelect, ElCol , ElRow, ElMessage, ElMessageBox, ElContainer, ElAside, ElHeader,ElMain, ElMenu, ElMenuItem, ElSubmenu, ElOption} from 'element-plus';

export default (app) => {
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
}