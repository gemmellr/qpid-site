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

# Qpid Proton Dotnet 1.0.0-M10 Release Notes

Proton is a high-performance, lightweight messaging library. More
about [Qpid Proton]({{site_url}}/proton/index.html).

For more information about this release, including download links and
documentation, see the [release overview](index.html).


## New features and improvements

 - [PROTON-2799](https://issues.apache.org/jira/browse/PROTON-2799) - [proton-dotnet] Update sender create to match source and target address

## Bugs fixed

 - [PROTON-2800](https://issues.apache.org/jira/browse/PROTON-2800) - [proton-dotnet] Ensure set message format get sent on first transfer frame
 - [PROTON-2801](https://issues.apache.org/jira/browse/PROTON-2801) - [proton-dotnet] Message format cannot be set to 0 on outbound messages
 - [PROTON-2805](https://issues.apache.org/jira/browse/PROTON-2805) - [proton-dotnet] Client connection does no send half configured idle timeout
 - [PROTON-2808](https://issues.apache.org/jira/browse/PROTON-2808) - [proton-dotnet] Prevent read timeout when partial frames are received slowly

## Tasks

 - [PROTON-2766](https://issues.apache.org/jira/browse/PROTON-2766) - [proton-dotnet] Add additional documentation to project
 - [PROTON-2793](https://issues.apache.org/jira/browse/PROTON-2793) - [proton-dotnet] Fix test code build warnings under .NET 8 
 - [PROTON-2811](https://issues.apache.org/jira/browse/PROTON-2811) - [proton-dotnet] v1.0.0-M10 release tasks