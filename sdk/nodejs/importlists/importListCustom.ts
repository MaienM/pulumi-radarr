// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Import List Custom resource.
 * For more information refer to [Import List](https://wiki.servarr.com/radarr/settings#import-lists) and [Custom List](https://wiki.servarr.com/radarr/supported#radarrlistimport).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@maienm/pulumi-radarr";
 *
 * const example = new radarr.importlists.ImportListCustom("example", {
 *     enableAuto: false,
 *     enabled: true,
 *     minimumAvailability: "tba",
 *     monitor: "none",
 *     name: "Example",
 *     qualityProfileId: 1,
 *     rootFolderPath: "/config",
 *     searchOnAdd: false,
 *     url: "https://custom.video/your-list",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import radarr:ImportLists/importListCustom:ImportListCustom example 1
 * ```
 */
export class ImportListCustom extends pulumi.CustomResource {
    /**
     * Get an existing ImportListCustom resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImportListCustomState, opts?: pulumi.CustomResourceOptions): ImportListCustom {
        return new ImportListCustom(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'radarr:ImportLists/importListCustom:ImportListCustom';

    /**
     * Returns true if the given object is an instance of ImportListCustom.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportListCustom {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportListCustom.__pulumiType;
    }

    /**
     * Enable automatic add flag.
     */
    public readonly enableAuto!: pulumi.Output<boolean>;
    /**
     * Enabled flag.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * List order.
     */
    public readonly listOrder!: pulumi.Output<number>;
    /**
     * Minimum availability.
     */
    public readonly minimumAvailability!: pulumi.Output<string>;
    /**
     * Should monitor.
     */
    public readonly monitor!: pulumi.Output<string>;
    /**
     * Import List name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Quality profile ID.
     */
    public readonly qualityProfileId!: pulumi.Output<number>;
    /**
     * Root folder path.
     */
    public readonly rootFolderPath!: pulumi.Output<string>;
    /**
     * Search on add flag.
     */
    public readonly searchOnAdd!: pulumi.Output<boolean>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * URL.
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a ImportListCustom resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportListCustomArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImportListCustomArgs | ImportListCustomState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImportListCustomState | undefined;
            resourceInputs["enableAuto"] = state ? state.enableAuto : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["listOrder"] = state ? state.listOrder : undefined;
            resourceInputs["minimumAvailability"] = state ? state.minimumAvailability : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["qualityProfileId"] = state ? state.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = state ? state.rootFolderPath : undefined;
            resourceInputs["searchOnAdd"] = state ? state.searchOnAdd : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as ImportListCustomArgs | undefined;
            if ((!args || args.minimumAvailability === undefined) && !opts.urn) {
                throw new Error("Missing required property 'minimumAvailability'");
            }
            if ((!args || args.monitor === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitor'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.qualityProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'qualityProfileId'");
            }
            if ((!args || args.rootFolderPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rootFolderPath'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["enableAuto"] = args ? args.enableAuto : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["listOrder"] = args ? args.listOrder : undefined;
            resourceInputs["minimumAvailability"] = args ? args.minimumAvailability : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["qualityProfileId"] = args ? args.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = args ? args.rootFolderPath : undefined;
            resourceInputs["searchOnAdd"] = args ? args.searchOnAdd : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ImportListCustom.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImportListCustom resources.
 */
export interface ImportListCustomState {
    /**
     * Enable automatic add flag.
     */
    enableAuto?: pulumi.Input<boolean>;
    /**
     * Enabled flag.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * List order.
     */
    listOrder?: pulumi.Input<number>;
    /**
     * Minimum availability.
     */
    minimumAvailability?: pulumi.Input<string>;
    /**
     * Should monitor.
     */
    monitor?: pulumi.Input<string>;
    /**
     * Import List name.
     */
    name?: pulumi.Input<string>;
    /**
     * Quality profile ID.
     */
    qualityProfileId?: pulumi.Input<number>;
    /**
     * Root folder path.
     */
    rootFolderPath?: pulumi.Input<string>;
    /**
     * Search on add flag.
     */
    searchOnAdd?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * URL.
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ImportListCustom resource.
 */
export interface ImportListCustomArgs {
    /**
     * Enable automatic add flag.
     */
    enableAuto?: pulumi.Input<boolean>;
    /**
     * Enabled flag.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * List order.
     */
    listOrder?: pulumi.Input<number>;
    /**
     * Minimum availability.
     */
    minimumAvailability: pulumi.Input<string>;
    /**
     * Should monitor.
     */
    monitor: pulumi.Input<string>;
    /**
     * Import List name.
     */
    name: pulumi.Input<string>;
    /**
     * Quality profile ID.
     */
    qualityProfileId: pulumi.Input<number>;
    /**
     * Root folder path.
     */
    rootFolderPath: pulumi.Input<string>;
    /**
     * Search on add flag.
     */
    searchOnAdd?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * URL.
     */
    url: pulumi.Input<string>;
}
