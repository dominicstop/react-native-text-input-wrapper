package RNATextInputView

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

public class RNATextInputViewModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("RNATextInputView")

    View(RNATextInputView::class) {
    }
  }
}
