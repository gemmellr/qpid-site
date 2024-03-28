;;
;; Licensed to the Apache Software Foundation (ASF) under one
;; or more contributor license agreements.  See the NOTICE file
;; distributed with this work for additional information
;; regarding copyright ownership.  The ASF licenses this file
;; to you under the Apache License, Version 2.0 (the
;; "License"); you may not use this file except in compliance
;; with the License.  You may obtain a copy of the License at
;;
;;   http://www.apache.org/licenses/LICENSE-2.0
;;
;; Unless required by applicable law or agreed to in writing,
;; software distributed under the License is distributed on an
;; "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
;; KIND, either express or implied.  See the License for the
;; specific language governing permissions and limitations
;; under the License.
;;

# Qpid ProtonJ2 1.0.0-M20 Release Notes

Proton is a high-performance, lightweight messaging library. More
about [Qpid Proton]({{site_url}}/proton/index.html).

For more information about this release, including download links and
documentation, see the [release overview](index.html).


## New features and improvements

 - [PROTON-2727](https://issues.apache.org/jira/browse/PROTON-2727) - [protonj2] Support reading keystore from class path
 - [PROTON-2796](https://issues.apache.org/jira/browse/PROTON-2796) - [protonj2] Update sender create to match source and target address
 - [PROTON-2802](https://issues.apache.org/jira/browse/PROTON-2802) - [protonj2] Add additional validation scripting to the AMQP test peer

## Bugs fixed

 - [PROTON-2794](https://issues.apache.org/jira/browse/PROTON-2794) - [protonj2] Transfer ID does not wrap as expected
 - [PROTON-2795](https://issues.apache.org/jira/browse/PROTON-2795) - [protonj2] Message format cannot be set to 0 on outbound messages
 - [PROTON-2803](https://issues.apache.org/jira/browse/PROTON-2803) - [protonj2] Reconnect options default max reconnect delay not set correctly
 - [PROTON-2804](https://issues.apache.org/jira/browse/PROTON-2804) - [protonj2] Client connection is not halving the idle timeout API says it will
 - [PROTON-2806](https://issues.apache.org/jira/browse/PROTON-2806) - [protonj2] Fix incorrect error message in protocol violation exception
 - [PROTON-2807](https://issues.apache.org/jira/browse/PROTON-2807) - [protonj2] Prevent read timeout when partial frames are received slowly
 - [PROTON-2809](https://issues.apache.org/jira/browse/PROTON-2809) - [protonj2] Exception when composite buffer reads empty Data section payload

## Tasks

 - [PROTON-2797](https://issues.apache.org/jira/browse/PROTON-2797) - [protonj2] Update Netty to latest release
 - [PROTON-2798](https://issues.apache.org/jira/browse/PROTON-2798) - [protonj2] Update test dependencies to latest releases