import form from './form.vue'
import stepsForm from './steps.vue'
import queryForm from './query.vue'
import { withInstall } from '../utils/withInstall'

export const ProForm = withInstall(form)
export const ProStepsForm = withInstall(stepsForm)
export const ProQueryForm = withInstall(queryForm)