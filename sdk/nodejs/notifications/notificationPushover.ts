// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Pushover resource.
 * For more information refer to [Notification](https://wiki.servarr.com/radarr/settings#connect) and [Pushover](https://wiki.servarr.com/radarr/supported#pushover).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@maienm/pulumi-radarr";
 *
 * const example = new radarr.notifications.NotificationJoin("example", {
 *     apiKey: "Key",
 *     includeHealthWarnings: false,
 *     name: "Example",
 *     onApplicationUpdate: false,
 *     onDownload: false,
 *     onGrab: false,
 *     onHealthIssue: false,
 *     onMovieAdded: false,
 *     onMovieDelete: false,
 *     onMovieFileDelete: false,
 *     onMovieFileDeleteForUpgrade: true,
 *     onUpgrade: false,
 *     priority: 2,
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import radarr:Notifications/notificationPushover:NotificationPushover example 1
 * ```
 */
export class NotificationPushover extends pulumi.CustomResource {
    /**
     * Get an existing NotificationPushover resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationPushoverState, opts?: pulumi.CustomResourceOptions): NotificationPushover {
        return new NotificationPushover(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'radarr:Notifications/notificationPushover:NotificationPushover';

    /**
     * Returns true if the given object is an instance of NotificationPushover.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationPushover {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationPushover.__pulumiType;
    }

    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * List of devices.
     */
    public readonly devices!: pulumi.Output<string[]>;
    /**
     * Expire.
     */
    public readonly expire!: pulumi.Output<number>;
    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * NotificationPushover name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * On application update flag.
     */
    public readonly onApplicationUpdate!: pulumi.Output<boolean>;
    /**
     * On download flag.
     */
    public readonly onDownload!: pulumi.Output<boolean>;
    /**
     * On grab flag.
     */
    public readonly onGrab!: pulumi.Output<boolean>;
    /**
     * On health issue flag.
     */
    public readonly onHealthIssue!: pulumi.Output<boolean>;
    /**
     * On movie added flag.
     */
    public readonly onMovieAdded!: pulumi.Output<boolean>;
    /**
     * On movie delete flag.
     */
    public readonly onMovieDelete!: pulumi.Output<boolean>;
    /**
     * On movie file delete flag.
     */
    public readonly onMovieFileDelete!: pulumi.Output<boolean>;
    /**
     * On movie file delete for upgrade flag.
     */
    public readonly onMovieFileDeleteForUpgrade!: pulumi.Output<boolean>;
    /**
     * On upgrade flag.
     */
    public readonly onUpgrade!: pulumi.Output<boolean>;
    /**
     * Priority. `-2` Silent, `-1` Quiet, `0` Normal, `1` High, `2` Emergency, `8` High.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Retry.
     */
    public readonly retry!: pulumi.Output<number>;
    /**
     * Sound.
     */
    public readonly sound!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * User key.
     */
    public readonly userKey!: pulumi.Output<string | undefined>;

    /**
     * Create a NotificationPushover resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationPushoverArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationPushoverArgs | NotificationPushoverState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationPushoverState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["devices"] = state ? state.devices : undefined;
            resourceInputs["expire"] = state ? state.expire : undefined;
            resourceInputs["includeHealthWarnings"] = state ? state.includeHealthWarnings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onApplicationUpdate"] = state ? state.onApplicationUpdate : undefined;
            resourceInputs["onDownload"] = state ? state.onDownload : undefined;
            resourceInputs["onGrab"] = state ? state.onGrab : undefined;
            resourceInputs["onHealthIssue"] = state ? state.onHealthIssue : undefined;
            resourceInputs["onMovieAdded"] = state ? state.onMovieAdded : undefined;
            resourceInputs["onMovieDelete"] = state ? state.onMovieDelete : undefined;
            resourceInputs["onMovieFileDelete"] = state ? state.onMovieFileDelete : undefined;
            resourceInputs["onMovieFileDeleteForUpgrade"] = state ? state.onMovieFileDeleteForUpgrade : undefined;
            resourceInputs["onUpgrade"] = state ? state.onUpgrade : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["retry"] = state ? state.retry : undefined;
            resourceInputs["sound"] = state ? state.sound : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["userKey"] = state ? state.userKey : undefined;
        } else {
            const args = argsOrState as NotificationPushoverArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.onMovieDelete === undefined) && !opts.urn) {
                throw new Error("Missing required property 'onMovieDelete'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["devices"] = args ? args.devices : undefined;
            resourceInputs["expire"] = args ? args.expire : undefined;
            resourceInputs["includeHealthWarnings"] = args ? args.includeHealthWarnings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onApplicationUpdate"] = args ? args.onApplicationUpdate : undefined;
            resourceInputs["onDownload"] = args ? args.onDownload : undefined;
            resourceInputs["onGrab"] = args ? args.onGrab : undefined;
            resourceInputs["onHealthIssue"] = args ? args.onHealthIssue : undefined;
            resourceInputs["onMovieAdded"] = args ? args.onMovieAdded : undefined;
            resourceInputs["onMovieDelete"] = args ? args.onMovieDelete : undefined;
            resourceInputs["onMovieFileDelete"] = args ? args.onMovieFileDelete : undefined;
            resourceInputs["onMovieFileDeleteForUpgrade"] = args ? args.onMovieFileDeleteForUpgrade : undefined;
            resourceInputs["onUpgrade"] = args ? args.onUpgrade : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["retry"] = args ? args.retry : undefined;
            resourceInputs["sound"] = args ? args.sound : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userKey"] = args?.userKey ? pulumi.secret(args.userKey) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey", "userKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationPushover.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationPushover resources.
 */
export interface NotificationPushoverState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * List of devices.
     */
    devices?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Expire.
     */
    expire?: pulumi.Input<number>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationPushover name.
     */
    name?: pulumi.Input<string>;
    /**
     * On application update flag.
     */
    onApplicationUpdate?: pulumi.Input<boolean>;
    /**
     * On download flag.
     */
    onDownload?: pulumi.Input<boolean>;
    /**
     * On grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On movie added flag.
     */
    onMovieAdded?: pulumi.Input<boolean>;
    /**
     * On movie delete flag.
     */
    onMovieDelete?: pulumi.Input<boolean>;
    /**
     * On movie file delete flag.
     */
    onMovieFileDelete?: pulumi.Input<boolean>;
    /**
     * On movie file delete for upgrade flag.
     */
    onMovieFileDeleteForUpgrade?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * Priority. `-2` Silent, `-1` Quiet, `0` Normal, `1` High, `2` Emergency, `8` High.
     */
    priority?: pulumi.Input<number>;
    /**
     * Retry.
     */
    retry?: pulumi.Input<number>;
    /**
     * Sound.
     */
    sound?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * User key.
     */
    userKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NotificationPushover resource.
 */
export interface NotificationPushoverArgs {
    /**
     * API key.
     */
    apiKey: pulumi.Input<string>;
    /**
     * List of devices.
     */
    devices?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Expire.
     */
    expire?: pulumi.Input<number>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationPushover name.
     */
    name: pulumi.Input<string>;
    /**
     * On application update flag.
     */
    onApplicationUpdate?: pulumi.Input<boolean>;
    /**
     * On download flag.
     */
    onDownload?: pulumi.Input<boolean>;
    /**
     * On grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On movie added flag.
     */
    onMovieAdded?: pulumi.Input<boolean>;
    /**
     * On movie delete flag.
     */
    onMovieDelete: pulumi.Input<boolean>;
    /**
     * On movie file delete flag.
     */
    onMovieFileDelete?: pulumi.Input<boolean>;
    /**
     * On movie file delete for upgrade flag.
     */
    onMovieFileDeleteForUpgrade?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * Priority. `-2` Silent, `-1` Quiet, `0` Normal, `1` High, `2` Emergency, `8` High.
     */
    priority?: pulumi.Input<number>;
    /**
     * Retry.
     */
    retry?: pulumi.Input<number>;
    /**
     * Sound.
     */
    sound?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * User key.
     */
    userKey?: pulumi.Input<string>;
}
