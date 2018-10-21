import {
  observable,
  action,
  decorate
} from 'mobx'

import { loginStore } from './LoginStore.js'
import { homeStore } from './HomeStore.js'

class CommonStore {
  isLoading = false
  isShowToast = false
  toastText = ''
  inputText = ''

  /*
  改变loading状态
  needLoading:是否需要进入loading状态 true:进入 false:不进入
  */
  showLoading(needLoading) {
    this.isLoading = needLoading
  }

  /*
  显示toast
  toast文字内容
  */
  showToast(text) {
    this.isShowToast = true
    this.toastText = text
  }

  /*
  隐藏toast
  */
  hiddenToast() {
    this.isShowToast = false
    this.toastText = ''
  }

  /*
  处理输入值
  */
  handleInputContent(content) {
    this.inputText = content
  }

  /*
  清空输入值
  */
  clearInput() {
    this.inputText = ''
  }

}

decorate(CommonStore, {
  isLoading: observable,
  isShowToast: observable,
  toastText: observable,
  inputText: observable,
  showLoading: action,
  showToast: action,
  hiddenToast: action,
  handleInputContent: action,
  clearInput: action
})

const commonStore = new CommonStore()

const stores = {
  commonStore,
  loginStore,
  homeStore
}

export { stores }