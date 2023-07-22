// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export { GetMetadataArgs, GetMetadataResult, GetMetadataOutputArgs } from "./getMetadata";
export const getMetadata: typeof import("./getMetadata").getMetadata = null as any;
export const getMetadataOutput: typeof import("./getMetadata").getMetadataOutput = null as any;
utilities.lazyLoad(exports, ["getMetadata","getMetadataOutput"], () => require("./getMetadata"));

export { GetMetadataConfigResult } from "./getMetadataConfig";
export const getMetadataConfig: typeof import("./getMetadataConfig").getMetadataConfig = null as any;
utilities.lazyLoad(exports, ["getMetadataConfig"], () => require("./getMetadataConfig"));

export { GetMetadataConsumersResult } from "./getMetadataConsumers";
export const getMetadataConsumers: typeof import("./getMetadataConsumers").getMetadataConsumers = null as any;
utilities.lazyLoad(exports, ["getMetadataConsumers"], () => require("./getMetadataConsumers"));

export { MetadataArgs, MetadataState } from "./metadata";
export type Metadata = import("./metadata").Metadata;
export const Metadata: typeof import("./metadata").Metadata = null as any;
utilities.lazyLoad(exports, ["Metadata"], () => require("./metadata"));

export { MetadataConfigArgs, MetadataConfigState } from "./metadataConfig";
export type MetadataConfig = import("./metadataConfig").MetadataConfig;
export const MetadataConfig: typeof import("./metadataConfig").MetadataConfig = null as any;
utilities.lazyLoad(exports, ["MetadataConfig"], () => require("./metadataConfig"));

export { MetadataEmbyArgs, MetadataEmbyState } from "./metadataEmby";
export type MetadataEmby = import("./metadataEmby").MetadataEmby;
export const MetadataEmby: typeof import("./metadataEmby").MetadataEmby = null as any;
utilities.lazyLoad(exports, ["MetadataEmby"], () => require("./metadataEmby"));

export { MetadataKodiArgs, MetadataKodiState } from "./metadataKodi";
export type MetadataKodi = import("./metadataKodi").MetadataKodi;
export const MetadataKodi: typeof import("./metadataKodi").MetadataKodi = null as any;
utilities.lazyLoad(exports, ["MetadataKodi"], () => require("./metadataKodi"));

export { MetadataRoksboxArgs, MetadataRoksboxState } from "./metadataRoksbox";
export type MetadataRoksbox = import("./metadataRoksbox").MetadataRoksbox;
export const MetadataRoksbox: typeof import("./metadataRoksbox").MetadataRoksbox = null as any;
utilities.lazyLoad(exports, ["MetadataRoksbox"], () => require("./metadataRoksbox"));

export { MetadataWdtvArgs, MetadataWdtvState } from "./metadataWdtv";
export type MetadataWdtv = import("./metadataWdtv").MetadataWdtv;
export const MetadataWdtv: typeof import("./metadataWdtv").MetadataWdtv = null as any;
utilities.lazyLoad(exports, ["MetadataWdtv"], () => require("./metadataWdtv"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "radarr:Metadata/metadata:Metadata":
                return new Metadata(name, <any>undefined, { urn })
            case "radarr:Metadata/metadataConfig:MetadataConfig":
                return new MetadataConfig(name, <any>undefined, { urn })
            case "radarr:Metadata/metadataEmby:MetadataEmby":
                return new MetadataEmby(name, <any>undefined, { urn })
            case "radarr:Metadata/metadataKodi:MetadataKodi":
                return new MetadataKodi(name, <any>undefined, { urn })
            case "radarr:Metadata/metadataRoksbox:MetadataRoksbox":
                return new MetadataRoksbox(name, <any>undefined, { urn })
            case "radarr:Metadata/metadataWdtv:MetadataWdtv":
                return new MetadataWdtv(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("radarr", "Metadata/metadata", _module)
pulumi.runtime.registerResourceModule("radarr", "Metadata/metadataConfig", _module)
pulumi.runtime.registerResourceModule("radarr", "Metadata/metadataEmby", _module)
pulumi.runtime.registerResourceModule("radarr", "Metadata/metadataKodi", _module)
pulumi.runtime.registerResourceModule("radarr", "Metadata/metadataRoksbox", _module)
pulumi.runtime.registerResourceModule("radarr", "Metadata/metadataWdtv", _module)
