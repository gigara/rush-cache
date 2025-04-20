/**
 * Copyright (c) 2023, Chamupathi Gigara Hettige. (https://github.com/gigara) All Rights Reserved.
 *
 * Chamupathi Gigara Hettige licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

import * as core from '@actions/core';

async function run() {
  try {
    core.exportVariable('ACTIONS_CACHE_SERVICE_V2', true);
    core.exportVariable("ACTIONS_CACHE_URL", process.env["ACTIONS_CACHE_URL"]);
    core.exportVariable("ACTIONS_RESULTS_URL", process.env["ACTIONS_RESULTS_URL"]);
    core.exportVariable("ACTIONS_RUNTIME_TOKEN", process.env["ACTIONS_RUNTIME_TOKEN"]);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
