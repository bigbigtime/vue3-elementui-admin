import { ElSlider, ElButton, ElSwitch, ElForm, ElFormItem, ElInput, ElCol , ElRow, ElMessage, ElContainer, ElAside, ElHeader,ElMain, ElMenu, ElMenuItem, ElSubmenu} from 'element-plus';

export default (app) => {
    app.use(ElButton);
    app.use(ElSwitch);
    app.use(ElForm);
    app.use(ElFormItem);
    app.use(ElInput);
    app.use(ElCol);
    app.use(ElRow);
    app.use(ElMessage);
    app.use(ElContainer);
    app.use(ElAside);
    app.use(ElHeader);
    app.use(ElMain);
    app.use(ElMenu);
    app.use(ElMenuItem);
    app.use(ElSubmenu);
    app.use(ElSlider);
}