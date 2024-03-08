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
      
    forStandardEditActionsResponder responder: UIResponderStandardEditActions,
    hitTestBlockMaker: @escaping (
      _ originalImp: T,
      _ selector: Selector
    ) -> U
  ) -> IMP? {
    let selector = #selector(UIResponderStandardEditActions.paste(_:));
    
    return Self.swizzleWithBlock(
      impMethodType: impMethodType,
      forObject: responder,
      withSelector: selector,
      newImpMaker: hitTestBlockMaker
    );
  };
  
  @discardableResult
  static func swizzleCanPerformAction<T, U>(
    /// From: `UIResponder.canPerformAction(_:withSender:)`, or:
    /// `func canPerformAction(_ action: Selector, withSender sender: Any?) -> Bool`
    ///
    impMethodType: T.Type =
      (@convention(c) (Any, Selector, Selector, Any?) -> Bool).self,
      
    impBlockType: U.Type =
      (@convention(block) (Any, Selector, Any?) -> Bool).self,
      
    forResponder responder: UIResponder,
    hitTestBlockMaker: @escaping (
      _ originalImp: T,
      _ selector: Selector
    ) -> U
  ) -> IMP? {
    let selector = #selector(UIResponder.canPerformAction(_:withSender:));
    
    return Self.swizzleWithBlock(
      impMethodType: impMethodType,
      forObject: responder,
      withSelector: selector,
      newImpMaker: hitTestBlockMaker
    );
  };
};
