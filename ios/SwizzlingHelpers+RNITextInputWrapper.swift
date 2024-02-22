//
//  SwizzlingHelpers+RNITextInputWrapper.swift
//  RNITextInputWrapper
//
//  Created by Dominic Go on 2/23/24.
//

import UIKit
import DGSwiftUtilities


public extension SwizzlingHelpers {
  
  @discardableResult
  static func swizzlePaste<T, U>(
    /// From: `UIResponderStandardEditActions.paste(_:)`, or:
    /// `optional func paste(_ sender: Any?) -> Void`
    ///
    impMethodType: T.Type =
      (@convention(c) (Any, Selector, Any) -> Void).self,
      
    impBlockType: U.Type =
      (@convention(block) (Any, Any) -> Void).self,
      
    forTextView textView: UITextView,
    hitTestBlockMaker: @escaping (
      _ originalImp: T,
      _ selector: Selector
    ) -> U
  ) -> IMP? {
    let selector = #selector(UITextView.paste(_:));
    
    return Self.swizzleWithBlock(
      impMethodType: impMethodType,
      forObject: textView,
      withSelector: selector,
      newImpMaker: hitTestBlockMaker
    );
  };
};
