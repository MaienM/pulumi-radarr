// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->Download Client Aria2 resource.
 * For more information refer to [Download Client](https://wiki.servarr.com/radarr/settings#download-clients) and [Aria2](https://wiki.servarr.com/radarr/supported#aria2).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@maienm/pulumi-radarr";
 *
 * const example = new radarr.downloadclient.DownloadClientAria2("example", {
 *     enable: true,
 *     host: "aria2",
 *     name: "Example",
 *     port: 6800,
 *     priority: 1,
 *     rpcPath: "/aria2/",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import radarr:DownloadClient/downloadClientAria2:DownloadClientAria2 example 1
 * ```
 */
export class DownloadClientAria2 extends pulumi.CustomResource {
    /**
     * Get an existing DownloadClientAria2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DownloadClientAria2State, opts?: pulumi.CustomResourceOptions): DownloadClientAria2 {
        return new DownloadClientAria2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'radarr:DownloadClient/downloadClientAria2:DownloadClientAria2';

    /**
     * Returns true if the given object is an instance of DownloadClientAria2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DownloadClientAria2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DownloadClientAria2.__pulumiType;
    }

    /**
     * Enable flag.
     */
    public readonly enable!: pulumi.Output<boolean>;
    /**
     * host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Download Client name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Remove completed downloads flag.
     */
    public readonly removeCompletedDownloads!: pulumi.Output<boolean>;
    /**
     * Remove failed downloads flag.
     */
    public readonly removeFailedDownloads!: pulumi.Output<boolean>;
    /**
     * RPC path.
     */
    public readonly rpcPath!: pulumi.Output<string>;
    /**
     * Secret token.
     */
    public readonly secretToken!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Use SSL flag.
     */
    public readonly useSsl!: pulumi.Output<boolean>;

    /**
     * Create a DownloadClientAria2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DownloadClientAria2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DownloadClientAria2Args | DownloadClientAria2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DownloadClientAria2State | undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["removeCompletedDownloads"] = state ? state.removeCompletedDownloads : undefined;
            resourceInputs["removeFailedDownloads"] = state ? state.removeFailedDownloads : undefined;
            resourceInputs["rpcPath"] = state ? state.rpcPath : undefined;
            resourceInputs["secretToken"] = state ? state.secretToken : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["useSsl"] = state ? state.useSsl : undefined;
        } else {
            const args = argsOrState as DownloadClientAria2Args | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["removeCompletedDownloads"] = args ? args.removeCompletedDownloads : undefined;
            resourceInputs["removeFailedDownloads"] = args ? args.removeFailedDownloads : undefined;
            resourceInputs["rpcPath"] = args ? args.rpcPath : undefined;
            resourceInputs["secretToken"] = args ? args.secretToken : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["useSsl"] = args ? args.useSsl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DownloadClientAria2.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DownloadClientAria2 resources.
 */
export interface DownloadClientAria2State {
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Remove completed downloads flag.
     */
    removeCompletedDownloads?: pulumi.Input<boolean>;
    /**
     * Remove failed downloads flag.
     */
    removeFailedDownloads?: pulumi.Input<boolean>;
    /**
     * RPC path.
     */
    rpcPath?: pulumi.Input<string>;
    /**
     * Secret token.
     */
    secretToken?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a DownloadClientAria2 resource.
 */
export interface DownloadClientAria2Args {
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Remove completed downloads flag.
     */
    removeCompletedDownloads?: pulumi.Input<boolean>;
    /**
     * Remove failed downloads flag.
     */
    removeFailedDownloads?: pulumi.Input<boolean>;
    /**
     * RPC path.
     */
    rpcPath?: pulumi.Input<string>;
    /**
     * Secret token.
     */
    secretToken?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
}
