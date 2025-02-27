// auto-generated by build/build-cdt-strings.js
/* eslint-disable */

import * as i18n from '../lib/i18n/i18n.js';

const UIStrings = {
  // Store strings used across messages in this block.
  /**
   * @description This links to the chrome feature status page when one exists.
   */
  feature: 'Check the feature status page for more details.',
  /**
   * @description This links to the chromium dash schedule when a milestone is set.
   * @example {100} milestone
   */
   milestone: 'This change will go into effect with milestone {milestone}.',
  /**
   * @description Title of issue raised when a deprecated feature is used
   */
  title: 'Deprecated Feature Used',

  /**
   * @description We show this warning when 1) an "authorization" header is
   *   attached to the request by scripts, 2) there is no "authorization" in
   *   the "access-control-allow-headers" header in the response, and 3) there
   *   is a wildcard symbol ("*") in the "access-control-allow-header" header
   *   in the response. This is allowed now, but we're planning to reject such
   *   responses and require responses to have an "access-control-allow-headers"
   *   containing "authorization".
   */
  authorizationCoveredByWildcard:
      'Authorization will not be covered by the wildcard symbol (*) in CORS `Access-Control-Allow-Headers` handling.',
  /**
   * @description This warning occurs when a page attempts to request a resource
   *    whose URL contained both a newline character (`\n` or `\r`), and a
   *    less-than character (`<`). These resources are blocked.
   */
  canRequestURLHTTPContainingNewline:
      'Resource requests whose URLs contained both removed whitespace `(n|r|t)` characters and less-than characters (`<`) are blocked. Please remove newlines and encode less-than characters from places like element attribute values in order to load these resources.',
  /**
   * @description TODO(crbug.com/1320335): Description needed for translation
   */
  chromeLoadTimesConnectionInfo:
      '`chrome.loadTimes()` is deprecated, instead use standardized API: Navigation Timing 2.',
  /**
   * @description TODO(crbug.com/1320336): Description needed for translation
   */
  chromeLoadTimesFirstPaintAfterLoadTime:
      '`chrome.loadTimes()` is deprecated, instead use standardized API: Paint Timing.',
  /**
   * @description TODO(crbug.com/1320337): Description needed for translation
   */
  chromeLoadTimesWasAlternateProtocolAvailable:
      '`chrome.loadTimes()` is deprecated, instead use standardized API: `nextHopProtocol` in Navigation Timing 2.',
  /**
   * @description TODO(crbug.com/1318847): Description needed for translation
   */
  cookieWithTruncatingChar: 'Cookies containing a `(0|r|n)` character will be rejected instead of truncated.',
  /**
   * @description This warning occurs when a frame accesses another frame's
   *    data after having set `document.domain` without having set the
   *    `Origin-Agent-Cluster` http header. This is a companion warning to
   *    `documentDomainSettingWithoutOriginAgentClusterHeader`, where that
   *    warning occurs when `document.domain` is set, and this warning
   *    occurs when an access has been made, based on that previous
   *    `document.domain` setting.
   */
  crossOriginAccessBasedOnDocumentDomain:
      'Relaxing the same-origin policy by setting `document.domain` is deprecated, and will be disabled by default. This deprecation warning is for a cross-origin access that was enabled by setting `document.domain`.',
  /**
   * @description Issue text shown when the web page uses a deprecated web API. The placeholder is
   * the deprecated web API function.
   * @example {window.alert} PH1
   */
  crossOriginWindowApi: 'Triggering {PH1} from cross origin iframes has been deprecated and will be removed in the future.',
  /**
   * @description Warning displayed to developers when they hide the Cast button
   * on a video element using the deprecated CSS selector instead of using the
   * disableRemotePlayback attribute on the element.
   */
  cssSelectorInternalMediaControlsOverlayCastButton:
      'The `disableRemotePlayback` attribute should be used in order to disable the default Cast integration instead of using `-internal-media-controls-overlay-cast-button` selector.',
  /**
   * @description This message is shown when the example deprecated feature is used
   */
  deprecationExample: 'This is an example of a translated deprecation issue message.',
  /**
   * @description This warning occurs when a script modifies `document.domain`
   *    without having set on `Origin-Agent-Cluster` http header. In other
   *    words, when a script relies on the default behaviour of
   *    `Origin-Agent-Cluster` when setting document.domain.
   */
  documentDomainSettingWithoutOriginAgentClusterHeader:
      'Relaxing the same-origin policy by setting `document.domain` is deprecated, and will be disabled by default. To continue using this feature, please opt-out of origin-keyed agent clusters by sending an `Origin-Agent-Cluster: ?0` header along with the HTTP response for the document and frames. See https://developer.chrome.com/blog/immutable-document-domain/ for more details.',
  /**
   * @description Warning displayed to developers when the non-standard `Event.path` API is used to notify them that this API is deprecated.
   */
  eventPath: '`Event.path` is deprecated and will be removed. Please use `Event.composedPath()` instead.',
  /**
   * @description This message is shown when the deprecated Expect-CT header is present.
   */
  expectCTHeader: 'The `Expect-CT` header is deprecated and will be removed. Chrome requires Certificate Transparency for all publicly trusted certificates issued after April 30, 2018.',
  /**
   * @description Warning displayed to developers when the Geolocation API is used from an insecure origin (one that isn't localhost or doesn't use HTTPS) to notify them that this use is no longer supported.
   */
  geolocationInsecureOrigin:
      '`getCurrentPosition()` and `watchPosition()` no longer work on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gle/chrome-insecure-origins for more details.',
  /**
   * @description Warning displayed to developers when the Geolocation API is used from an insecure origin (one that isn't localhost or doesn't use HTTPS) to notify them that this use is deprecated.
   */
  geolocationInsecureOriginDeprecatedNotRemoved:
      '`getCurrentPosition()` and `watchPosition()` are deprecated on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gle/chrome-insecure-origins for more details.',
  /**
   * @description TODO(crbug.com/1318858): Description needed for translation
   */
  getUserMediaInsecureOrigin:
      '`getUserMedia()` no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gle/chrome-insecure-origins for more details.',
  /**
   * @description A deprecation warning shown to developers in the DevTools Issues tab when code tries to use the deprecated hostCandidate field, guiding developers to use the the equivalent information in the .address and .port fields instead.
   */
  hostCandidateAttributeGetter:
      '`RTCPeerConnectionIceErrorEvent.hostCandidate` is deprecated. Please use `RTCPeerConnectionIceErrorEvent.address` or `RTCPeerConnectionIceErrorEvent.port` instead.',
  /**
   * @description A deprecation warning shown in the DevTools Issues tab,
   * when a service worker reads one of the fields from an event named
   * "canmakepayment".
   */
  identityInCanMakePaymentEvent: 'The merchant origin and arbitrary data from the `canmakepayment` service worker event are deprecated and will be removed: `topOrigin`, `paymentRequestOrigin`, `methodData`, `modifiers`.',
  /**
   * @description TODO(crbug.com/1320343): Description needed for translation
   */
  insecurePrivateNetworkSubresourceRequest:
      'The website requested a subresource from a network that it could only access because of its users\' privileged network position. These requests expose non-public devices and servers to the internet, increasing the risk of a cross-site request forgery (CSRF) attack, and/or information leakage. To mitigate these risks, Chrome deprecates requests to non-public subresources when initiated from non-secure contexts, and will start blocking them.',
  /**
   * @description A deprecation warning shown in the DevTools Issues tab.
   * It's shown when a video conferencing website attempts to disable
   * use of IPv6 addresses with a non-standard API.
   */
  legacyConstraintGoogIPv6:
      'IPv6 is enabled-by-default and the ability to disable it using `googIPv6` is targeted to be removed in M108, after which it will be ignored. Please stop using this legacy constraint.',
  /**
   * @description TODO(crbug.com/1318865): Description needed for translation
   */
  localCSSFileExtensionRejected:
      'CSS cannot be loaded from `file:` URLs unless they end in a `.css` file extension.',
  /**
   * @description TODO(crbug.com/1320345): Description needed for translation
   */
  mediaSourceAbortRemove:
      'Using `SourceBuffer.abort()` to abort `remove()`\'s asynchronous range removal is deprecated due to specification change. Support will be removed in the future. You should listen to the `updateend` event instead. `abort()` is intended to only abort an asynchronous media append or reset parser state.',
  /**
   * @description TODO(crbug.com/1320346): Description needed for translation
   */
  mediaSourceDurationTruncatingBuffered:
      'Setting `MediaSource.duration` below the highest presentation timestamp of any buffered coded frames is deprecated due to specification change. Support for implicit removal of truncated buffered media will be removed in the future. You should instead perform explicit `remove(newDuration, oldDuration)` on all `sourceBuffers`, where `newDuration < oldDuration`.',
  /**
   * @description TODO(crbug.com/1320347): Description needed for translation
   */
  noSysexWebMIDIWithoutPermission:
      'Web MIDI will ask a permission to use even if the sysex is not specified in the `MIDIOptions`.',
  /**
   * @description Warning displayed to developers when the Notification API is used from an insecure origin (one that isn't localhost or doesn't use HTTPS) to notify them that this use is no longer supported.
   */
  notificationInsecureOrigin:
      'The Notification API may no longer be used from insecure origins. You should consider switching your application to a secure origin, such as HTTPS. See https://goo.gle/chrome-insecure-origins for more details.',
  /**
   * @description Warning displayed to developers when permission to use notifications has been requested by a cross-origin iframe, to notify them that this use is no longer supported.
   */
  notificationPermissionRequestedIframe:
      'Permission for the Notification API may no longer be requested from a cross-origin iframe. You should consider requesting permission from a top-level frame or opening a new window instead.',
  /**
   * @description TODO(crbug.com/1318867): Description needed for translation
   */
  obsoleteWebRtcCipherSuite:
      'Your partner is negotiating an obsolete (D)TLS version. Please check with your partner to have this fixed.',
  /**
   * @description Warning displayed to developers when `window.openDatabase` is used in non-secure contexts to notify that the API is deprecated and will be removed.
   */
  openWebDatabaseInsecureContext:
      'WebSQL in non-secure contexts is deprecated and will be removed soon. Please use Web Storage or Indexed Database.',
  /**
   * @description Warning displayed to developers when persistent storage type is used to notify that storage type is deprecated.
   */
  persistentQuotaType:
      '`StorageType.persistent` is deprecated. Please use standardized `navigator.storage` instead.',
  /**
   * @description This issue indicates that a `<source>` element with a `<picture>` parent was using an `src` attribute, which is not valid and is ignored by the browser. The `srcset` attribute should be used instead.
   */
  pictureSourceSrc:
      '`<source src>` with a `<picture>` parent is invalid and therefore ignored. Please use `<source srcset>` instead.',
  /**
   * @description Warning displayed to developers when the vendor-prefixed method is used rather than the equivalent unprefixed method.
   * Both placeholders are Web API functions (single words).
   * @example {webkitCancelAnimationFrame} PH1
   * @example {cancelAnimationFrame} PH2
   */
  vendorSpecificApi: '{PH1} is vendor-specific. Please use the standard {PH2} instead.',
  /**
   * @description Warning displayed to developers when `window.webkitStorageInfo` is used to notify that the API is deprecated.
   */
  prefixedStorageInfo:
      '`window.webkitStorageInfo` is deprecated. Please use standardized `navigator.storage` instead.',
  /**
   * @description Standard message when one web API is deprecated in favor of another. Both
   * placeholders are always web API functions.
   * @example {HTMLVideoElement.webkitDisplayingFullscreen} PH1
   * @example {Document.fullscreenElement} PH2
   */
  deprecatedWithReplacement: '{PH1} is deprecated. Please use {PH2} instead.',
  /**
   * @description TODO(crbug.com/1320357): Description needed for translation
   */
  requestedSubresourceWithEmbeddedCredentials:
      'Subresource requests whose URLs contain embedded credentials (e.g. `https://user:pass@host/`) are blocked.',
  /**
   * @description A deprecation warning shown in the DevTools Issues tab.
   * It's shown when a video conferencing website attempts to use a
   * non-standard crypto method when performing a handshake to set up a
   * connection with another endpoint.
   */
  rtcConstraintEnableDtlsSrtpFalse:
      'The constraint `DtlsSrtpKeyAgreement` is removed. You have specified a `false` value for this constraint, which is interpreted as an attempt to use the removed `SDES key negotiation` method. This functionality is removed; use a service that supports `DTLS key negotiation` instead.',
  /**
   * @description A deprecation warning shown in the DevTools Issues tab.
   * It's shown when a video conferencing website uses a non-standard
   * API for controlling the crypto method used, but is not having an
   * effect because the desired behavior is already enabled-by-default.
   */
  rtcConstraintEnableDtlsSrtpTrue:
      'The constraint `DtlsSrtpKeyAgreement` is removed. You have specified a `true` value for this constraint, which had no effect, but you can remove this constraint for tidiness.',
  /**
   * @description A deprecation warning shown in the DevTools Issues tab.
   * The `Session Description Protocol`, or `SDP` for short, is a
   * protocol used by video conferencing websites to establish the
   * number of audio and/or video streams to send and/or receive. This
   * warning is emitted when a web site attempts to use a deprecated
   * version of the protocol, called `Plan B`, that is no longer
   * supported. The spec compliant version of the protocol is called
   * `Unified Plan`.
   */
  rtcPeerConnectionComplexPlanBSdpUsingDefaultSdpSemantics:
      '`Complex Plan B SDP` detected. This dialect of the `Session Description Protocol` is no longer supported. Please use `Unified Plan SDP` instead.',
  /**
   * @description A deprecation warning shown in the DevTools Issues tab.
   * The `Session Description Protocol`, or `SDP` for short, is a
   * protocol used by video conferencing websites to establish the
   * number of audio and/or video streams to send and/or receive. This
   * warning is emitted when a web site attempts to use a deprecated
   * version of the protocol, called `Plan B`, that is no longer
   * supported. The spec compliant version of the protocol is called
   * `Unified Plan`.
   */
  rtcPeerConnectionSdpSemanticsPlanB:
      '`Plan B SDP semantics`, which is used when constructing an `RTCPeerConnection` with `{sdpSemantics:plan-b}`, is a legacy non-standard version of the `Session Description Protocol` that has been permanently deleted from the Web Platform. It is still available when building with `IS_FUCHSIA`, but we intend to delete it as soon as possible. Stop depending on it. See https://crbug.com/1302249 for status.',
  /**
   * @description A deprecation warning shown in the DevTools Issues tab.
   * It's shown then a video conferencing website attempts to use the
   * `RTCP MUX` policy.
   */
  rtcpMuxPolicyNegotiate: 'The `rtcpMuxPolicy` option is deprecated and will be removed.',
  /**
   * @description A deprecation warning shown in the DevTools Issues tab. The placeholder is always the noun
   * "SharedArrayBuffer" which refers to a JavaScript construct.
   */
  sharedArrayBufferConstructedWithoutIsolation:
      '`SharedArrayBuffer` will require cross-origin isolation. See https://developer.chrome.com/blog/enabling-shared-array-buffer/ for more details.',
  /**
   * @description A deprecation warning shown in the DevTools Issues tab.
   * It's shown when the speech synthesis API is called before the page
   * receives a user activation.
   */
  textToSpeech_DisallowedByAutoplay:
      '`speechSynthesis.speak()` without user activation is deprecated and will be removed.',
  /**
   * @description A deprecation warning shown in the DevTools Issues tab. The placeholder is always the noun
   * "SharedArrayBuffer" which refers to a JavaScript construct. "Extensions" refers to Chrome extensions. The warning is shown
   * when Chrome Extensions attempt to use "SharedArrayBuffer"s under insecure circumstances.
   */
  v8SharedArrayBufferConstructedInExtensionWithoutIsolation:
      'Extensions should opt into cross-origin isolation to continue using `SharedArrayBuffer`. See https://developer.chrome.com/docs/extensions/mv3/cross-origin-isolation/.',
  /**
   * @description Warning displayed to developers that they are using
   * `XMLHttpRequest` API in a way that they expect an unsupported character
   * encoding `UTF-16` could be used in the server reply.
   */
  xhrJSONEncodingDetection: 'UTF-16 is not supported by response json in `XMLHttpRequest`',
  /**
   * @description Warning displayed to developers. It is shown when
   * the `XMLHttpRequest` API is used in a way that it slows down the page load
   * of the next page. The `main thread` refers to an operating systems thread
   * used to run most of the processing of HTML documents, so please use a
   * consistent wording.
   */
  xmlHttpRequestSynchronousInNonWorkerOutsideBeforeUnload:
      'Synchronous `XMLHttpRequest` on the main thread is deprecated because of its detrimental effects to the end user\u2019s experience. For more help, check https://xhr.spec.whatwg.org/.',
  /**
   * @description Warning displayed to developers that instead of using
   *    `supportsSession()`, which returns a promise that resolves if
   *    the XR session can be supported and rejects if not, they should
   *    use `isSessionSupported()` which will return a promise which
   *    resolves to a boolean indicating if the XR session can be
   *    supported or not, but may reject to throw an exception.
   */
  xrSupportsSession:
      '`supportsSession()` is deprecated. Please use `isSessionSupported()` and check the resolved boolean value instead.',
};

const str_ = i18n.createIcuMessageFn(import.meta.url, UIStrings);


/**
 * @param {LH.Crdp.Audits.DeprecationIssueDetails} issueDetails
 */
function getDescription(issueDetails) {
    let message;
    let feature = 0;
    let milestone = 0;
    // Keep case statements alphabetized per DeprecationIssueType.
    switch (issueDetails.type) {
      case 'AuthorizationCoveredByWildcard':
        message = str_(UIStrings.authorizationCoveredByWildcard);
        milestone = 97;
        break;
      case 'CanRequestURLHTTPContainingNewline':
        message = str_(UIStrings.canRequestURLHTTPContainingNewline);
        feature = 5735596811091968;
        break;
      case 'ChromeLoadTimesConnectionInfo':
        message = str_(UIStrings.chromeLoadTimesConnectionInfo);
        feature = 5637885046816768;
        break;
      case 'ChromeLoadTimesFirstPaintAfterLoadTime':
        message = str_(UIStrings.chromeLoadTimesFirstPaintAfterLoadTime);
        feature = 5637885046816768;
        break;
      case 'ChromeLoadTimesWasAlternateProtocolAvailable':
        message = str_(UIStrings.chromeLoadTimesWasAlternateProtocolAvailable);
        feature = 5637885046816768;
        break;
      case 'CookieWithTruncatingChar':
        message = str_(UIStrings.cookieWithTruncatingChar);
        milestone = 103;
        break;
      case 'CrossOriginAccessBasedOnDocumentDomain':
        message = str_(UIStrings.crossOriginAccessBasedOnDocumentDomain);
        milestone = 109;
        break;
      case 'CrossOriginWindowAlert':
        message = str_(UIStrings.crossOriginWindowApi, {PH1: 'window.alert'});
        break;
      case 'CrossOriginWindowConfirm':
        message = str_(UIStrings.crossOriginWindowApi, {PH1: 'window.confirm'});
        break;
      case 'CSSSelectorInternalMediaControlsOverlayCastButton':
        message = str_(UIStrings.cssSelectorInternalMediaControlsOverlayCastButton);
        feature = 5714245488476160;
        break;
      case 'DeprecationExample':
        message = str_(UIStrings.deprecationExample);
        feature = 5684289032159232;
        milestone = 100;
        break;
      case 'DocumentDomainSettingWithoutOriginAgentClusterHeader':
        message = str_(UIStrings.documentDomainSettingWithoutOriginAgentClusterHeader);
        milestone = 109;
        break;
      case 'EventPath':
        message = str_(UIStrings.eventPath);
        feature = 5726124632965120;
        milestone = 109;
        break;
      case 'ExpectCTHeader':
        message = str_(UIStrings.expectCTHeader);
        feature = 6244547273687040;
        milestone = 107;
        break;
      case 'GeolocationInsecureOrigin':
        message = str_(UIStrings.geolocationInsecureOrigin);
        break;
      case 'GeolocationInsecureOriginDeprecatedNotRemoved':
        message = str_(UIStrings.geolocationInsecureOriginDeprecatedNotRemoved);
        break;
      case 'GetUserMediaInsecureOrigin':
        message = str_(UIStrings.getUserMediaInsecureOrigin);
        break;
      case 'HostCandidateAttributeGetter':
        message = str_(UIStrings.hostCandidateAttributeGetter);
        break;
      case 'IdentityInCanMakePaymentEvent':
        message = str_(UIStrings.identityInCanMakePaymentEvent);
        feature = 5190978431352832;
        break;
      case 'InsecurePrivateNetworkSubresourceRequest':
        message = str_(UIStrings.insecurePrivateNetworkSubresourceRequest);
        feature = 5436853517811712;
        milestone = 92;
        break;
      case 'LegacyConstraintGoogIPv6':
        message = str_(UIStrings.legacyConstraintGoogIPv6);
        milestone = 103;
        break;
      case 'LocalCSSFileExtensionRejected':
        message = str_(UIStrings.localCSSFileExtensionRejected);
        milestone = 64;
        break;
      case 'MediaSourceAbortRemove':
        message = str_(UIStrings.mediaSourceAbortRemove);
        feature = 6107495151960064;
        break;
      case 'MediaSourceDurationTruncatingBuffered':
        message = str_(UIStrings.mediaSourceDurationTruncatingBuffered);
        feature = 6107495151960064;
        break;
      case 'NavigateEventRestoreScroll':
        message = str_(
            UIStrings.deprecatedWithReplacement, {PH1: 'navigateEvent.restoreScroll()', PH2: 'navigateEvent.scroll()'});
        break;
      case 'NavigateEventTransitionWhile':
        message = str_(
            UIStrings.deprecatedWithReplacement,
            {PH1: 'navigateEvent.transitionWhile()', PH2: 'navigateEvent.intercept()'});
        break;
      case 'NoSysexWebMIDIWithoutPermission':
        message = str_(UIStrings.noSysexWebMIDIWithoutPermission);
        feature = 5138066234671104;
        milestone = 82;
        break;
      case 'NotificationInsecureOrigin':
        message = str_(UIStrings.notificationInsecureOrigin);
        break;
      case 'NotificationPermissionRequestedIframe':
        message = str_(UIStrings.notificationPermissionRequestedIframe);
        feature = 6451284559265792;
        break;
      case 'ObsoleteWebRtcCipherSuite':
        message = str_(UIStrings.obsoleteWebRtcCipherSuite);
        milestone = 81;
        break;
      case 'OpenWebDatabaseInsecureContext':
        message = str_(UIStrings.openWebDatabaseInsecureContext);
        feature = 5175124599767040;
        milestone = 105;
        break;
      case 'PersistentQuotaType':
        message = str_(UIStrings.persistentQuotaType);
        feature = 5176235376246784;
        milestone = 106;
        break;
      case 'PictureSourceSrc':
        message = str_(UIStrings.pictureSourceSrc);
        break;
      case 'PrefixedCancelAnimationFrame':
        message = str_(
            UIStrings.vendorSpecificApi, {PH1: 'webkitCancelAnimationFrame', PH2: 'cancelAnimationFrame'});
        break;
      case 'PrefixedRequestAnimationFrame':
        message = str_(
            UIStrings.vendorSpecificApi, {PH1: 'webkitRequestAnimationFrame', PH2: 'requestAnimationFrame'});
        break;
      case 'PrefixedStorageInfo':
        message = str_(UIStrings.prefixedStorageInfo);
        break;
      case 'PrefixedVideoDisplayingFullscreen':
        message = str_(
            UIStrings.deprecatedWithReplacement,
            {PH1: 'HTMLVideoElement.webkitDisplayingFullscreen', PH2: 'Document.fullscreenElement'});
        break;
      case 'PrefixedVideoEnterFullScreen':
        message = str_(
            UIStrings.deprecatedWithReplacement,
            {PH1: 'HTMLVideoElement.webkitEnterFullScreen()', PH2: 'Element.requestFullscreen()'});
        break;
      case 'PrefixedVideoEnterFullscreen':
        message = str_(
            UIStrings.deprecatedWithReplacement,
            {PH1: 'HTMLVideoElement.webkitEnterFullscreen()', PH2: 'Element.requestFullscreen()'});
        break;
      case 'PrefixedVideoExitFullScreen':
        message = str_(
            UIStrings.deprecatedWithReplacement,
            {PH1: 'HTMLVideoElement.webkitExitFullScreen()', PH2: 'Document.exitFullscreen()'});
        break;
      case 'PrefixedVideoExitFullscreen':
        message = str_(
            UIStrings.deprecatedWithReplacement,
            {PH1: 'HTMLVideoElement.webkitExitFullscreen()', PH2: 'Document.exitFullscreen()'});
        break;
      case 'PrefixedVideoSupportsFullscreen':
        message = str_(
            UIStrings.deprecatedWithReplacement,
            {PH1: 'HTMLVideoElement.webkitSupportsFullscreen', PH2: 'Document.fullscreenEnabled'});
        break;
      case 'RangeExpand':
        message =
            str_(UIStrings.deprecatedWithReplacement, {PH1: 'Range.expand()', PH2: 'Selection.modify()'});
        break;
      case 'RequestedSubresourceWithEmbeddedCredentials':
        message = str_(UIStrings.requestedSubresourceWithEmbeddedCredentials);
        feature = 5669008342777856;
        break;
      case 'RTCConstraintEnableDtlsSrtpFalse':
        message = str_(UIStrings.rtcConstraintEnableDtlsSrtpFalse);
        milestone = 97;
        break;
      case 'RTCConstraintEnableDtlsSrtpTrue':
        message = str_(UIStrings.rtcConstraintEnableDtlsSrtpTrue);
        milestone = 97;
        break;
      case 'RTCPeerConnectionComplexPlanBSdpUsingDefaultSdpSemantics':
        message = str_(UIStrings.rtcPeerConnectionComplexPlanBSdpUsingDefaultSdpSemantics);
        milestone = 72;
        break;
      case 'RTCPeerConnectionSdpSemanticsPlanB':
        message = str_(UIStrings.rtcPeerConnectionSdpSemanticsPlanB);
        feature = 5823036655665152;
        milestone = 93;
        break;
      case 'RtcpMuxPolicyNegotiate':
        message = str_(UIStrings.rtcpMuxPolicyNegotiate);
        feature = 5654810086866944;
        milestone = 62;
        break;
      case 'SharedArrayBufferConstructedWithoutIsolation':
        message = str_(UIStrings.sharedArrayBufferConstructedWithoutIsolation);
        milestone = 106;
        break;
      case 'TextToSpeech_DisallowedByAutoplay':
        message = str_(UIStrings.textToSpeech_DisallowedByAutoplay);
        feature = 5687444770914304;
        milestone = 71;
        break;
      case 'V8SharedArrayBufferConstructedInExtensionWithoutIsolation':
        message = str_(UIStrings.v8SharedArrayBufferConstructedInExtensionWithoutIsolation);
        milestone = 96;
        break;
      case 'XHRJSONEncodingDetection':
        message = str_(UIStrings.xhrJSONEncodingDetection);
        milestone = 93;
        break;
      case 'XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload':
        message = str_(UIStrings.xmlHttpRequestSynchronousInNonWorkerOutsideBeforeUnload);
        break;
      case 'XRSupportsSession':
        message = str_(UIStrings.xrSupportsSession);
        milestone = 80;
        break;
    }
    const links = [];
    if (feature !== 0) {
      links.push({
        link: `https://chromestatus.com/feature/${feature}`,
        linkTitle: str_(UIStrings.feature),
      });
    }
    if (milestone !== 0) {
      links.push({
        link: 'https://chromiumdash.appspot.com/schedule',
        linkTitle: str_(UIStrings.milestone, {milestone}),
      });
    }
    return ({
      file: 'deprecation.md',
      substitutions: new Map([
        ['PLACEHOLDER_title', str_(UIStrings.title)],
        ['PLACEHOLDER_message', message],
      ]),
      links, message,
    });
  }

export {
  getDescription as getIssueDetailDescription,
  UIStrings,
};