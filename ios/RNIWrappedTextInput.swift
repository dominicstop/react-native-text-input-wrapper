//
//  RNIWrappedTextInput.swift
//  RNITextInputWrapper
//
//  Created by Dominic Go on 3/2/24.
//

import Foundation
import React
import DGSwiftUtilities


public enum RNIWrappedTextInput {
  case textField(WeakRef<UITextField>);
  case textView(WeakRef<UITextView>);
  
  public var textInput: UITextInput? {
    switch self {
      case let .textField(textField):
        return textField.ref;
      
      case let .textView(textView):
        return textView.ref;
    };
  };
  
  public init(textField: UITextField){
    self = .textField(.init(with: textField));
  };
  
  public init(textView: UITextView){
    self = .textView(.init(with: textView));
  };
};
