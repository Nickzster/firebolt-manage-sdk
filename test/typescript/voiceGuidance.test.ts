/*
 * Copyright 2021 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { test, expect } from "@jest/globals";
import { VoiceGuidance } from "../../dist/lib/firebolt-manage";

class VGProvider implements VoiceGuidance.SettingsProvider {
  settings(
    parameters: void,
    session: object
  ): Promise<VoiceGuidance.VoiceGuidanceSettings> {
    return Promise.resolve(null);
  }
}

test("VoiceGuidance.enabled()", () => {
  return VoiceGuidance.enabled().then((res) => {
    expect(res).toEqual(true);
  });
});

test("VoiceGuidance.speed()", () => {
  return VoiceGuidance.speed().then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("VoiceGuidance.listen() for enabledChanged event", () => {
  return VoiceGuidance.listen("enabledChanged", () => {}).then(
    (res: number) => {
      expect(res > 0).toBe(true);
    }
  );
});

test("VoiceGuidance.once() for enabledChanged event", () => {
  return VoiceGuidance.once("enabledChanged", () => {}).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("VoiceGuidance.listen() for requestSettings event", () => {
  return VoiceGuidance.listen("requestSettings", () => {}).then(
    (res: number) => {
      expect(res > 0).toBe(true);
    }
  );
});

test("VoiceGuidance.once() for requestSettings event", () => {
  return VoiceGuidance.once("requestSettings", () => {}).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("VoiceGuidance.listen() for speedChanged event", () => {
  return VoiceGuidance.listen("speedChanged", () => {}).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("VoiceGuidance.once() for speedChanged event", () => {
  return VoiceGuidance.once("speedChanged", () => {}).then((res: number) => {
    expect(res > 0).toBe(true);
  });
});

test("VoiceGuidance.clear()", () => {
  const result = VoiceGuidance.clear(2);
  expect(result).toBeFalsy();
});

test("VoiceGuidance.provide() declarations ", () => {
  VoiceGuidance.provide(
    "xrn:firebolt:capability:accessibility:voiceguidance",
    new VGProvider()
  );
  expect(1).toBe(1);
});

test("VoiceGuidance.provide() with blank object", () => {
  expect(() => {
    VoiceGuidance.provide("xrn:firebolt:capability:accessibility:voiceguidance", {});
  }).toThrow();
});
