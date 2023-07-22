// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Sendgrid resource.
 * For more information refer to [Notification](https://wiki.servarr.com/radarr/settings#connect) and [Sendgrid](https://wiki.servarr.com/radarr/supported#sendgrid).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@maienm/pulumi-radarr";
 *
 * const example = new radarr.notifications.NotificationSendgrid("example", {
 *     apiKey: "APIkey",
 *     from: "from_sendgrid@example.com",
 *     includeHealthWarnings: false,
 *     name: "Example",
 *     onApplicationUpdate: false,
 *     onDownload: true,
 *     onGrab: false,
 *     onHealthIssue: false,
 *     onMovieAdded: false,
 *     onMovieDelete: false,
 *     onMovieFileDelete: false,
 *     onMovieFileDeleteForUpgrade: true,
 *     onUpgrade: true,
 *     recipients: [
 *         "user1@example.com",
 *         "user2@example.com",
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import radarr:Notifications/notificationSendgrid:NotificationSendgrid example 1
 * ```
 */
export class NotificationSendgrid extends pulumi.CustomResource {
    /**
     * Get an existing NotificationSendgrid resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationSendgridState, opts?: pulumi.CustomResourceOptions): NotificationSendgrid {
        return new NotificationSendgrid(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'radarr:Notifications/notificationSendgrid:NotificationSendgrid';

    /**
     * Returns true if the given object is an instance of NotificationSendgrid.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationSendgrid {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationSendgrid.__pulumiType;
    }

    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * From.
     */
    public readonly from!: pulumi.Output<string>;
    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * NotificationSendgrid name.
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
     * Recipients.
     */
    public readonly recipients!: pulumi.Output<string[]>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a NotificationSendgrid resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationSendgridArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationSendgridArgs | NotificationSendgridState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationSendgridState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["from"] = state ? state.from : undefined;
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
            resourceInputs["recipients"] = state ? state.recipients : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as NotificationSendgridArgs | undefined;
            if ((!args || args.from === undefined) && !opts.urn) {
                throw new Error("Missing required property 'from'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.onMovieDelete === undefined) && !opts.urn) {
                throw new Error("Missing required property 'onMovieDelete'");
            }
            if ((!args || args.recipients === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recipients'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["from"] = args ? args.from : undefined;
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
            resourceInputs["recipients"] = args ? args.recipients : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationSendgrid.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationSendgrid resources.
 */
export interface NotificationSendgridState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * From.
     */
    from?: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationSendgrid name.
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
     * Recipients.
     */
    recipients?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a NotificationSendgrid resource.
 */
export interface NotificationSendgridArgs {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * From.
     */
    from: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationSendgrid name.
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
     * Recipients.
     */
    recipients: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
