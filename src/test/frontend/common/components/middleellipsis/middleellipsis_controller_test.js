// Copyright 2017 The Kubernetes Dashboard Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import MiddleEllipsisController from 'common/components/middleellipsis/component';
import componentsModule from 'common/components/module';

describe('Middle ellipsis controller', () => {
  /**
   * @type {!MiddleEllipsisController}
   */
  let ctrl;

  beforeEach(() => {
    angular.mock.module(componentsModule.name);

    angular.mock.inject(($controller, $rootScope) => {
      ctrl = $controller(MiddleEllipsisController, {$scope: $rootScope});
    });
  });

  it('should initialize controller', () => {
    expect(ctrl).not.toBeNull();
  });
});
