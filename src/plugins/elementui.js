import { ElButton, ElSwitch, ElForm, ElFormItem, ElInput, ElCol , ElRow, ElMessage} from 'element-plus'

export default (app) => {
    app.use(ElButton);
    app.use(ElSwitch);
    app.use(ElForm);
    app.use(ElFormItem);
    app.use(ElInput);
    app.use(ElCol);
    app.use(ElRow);
    app.use(ElMessage);
}