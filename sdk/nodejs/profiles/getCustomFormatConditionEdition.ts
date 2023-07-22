// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -> Custom Format Condition Edition data source.
 * For more information refer to [Custom Format Conditions](https://wiki.servarr.com/radarr/settings#conditions).
 *
 * {{% examples %}}
 * ## Example Usage
 * {{% example %}}
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@maienm/pulumi-radarr";
 * import * as radarr from "@pulumi/radarr";
 *
 * const exampleCustomFormatConditionEdition = radarr.Profiles.getCustomFormatConditionEdition({
 *     name: "Example",
 *     negate: false,
 *     required: false,
 *     value: ".*Extended.*",
 * });
 * const exampleCustomFormat = new radarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatConditionEdition],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatConditionEdition(args: GetCustomFormatConditionEditionArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomFormatConditionEditionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("radarr:Profiles/getCustomFormatConditionEdition:getCustomFormatConditionEdition", {
        "name": args.name,
        "negate": args.negate,
        "required": args.required,
        "value": args.value,
    }, opts);
}

/**
 * A collection of arguments for invoking getCustomFormatConditionEdition.
 */
export interface GetCustomFormatConditionEditionArgs {
    /**
     * Specification name.
     */
    name: string;
    /**
     * Negate flag.
     */
    negate: boolean;
    /**
     * Computed flag.
     */
    required: boolean;
    /**
     * Edition RegEx.
     */
    value: string;
}

/**
 * A collection of values returned by getCustomFormatConditionEdition.
 */
export interface GetCustomFormatConditionEditionResult {
    /**
     * Custom format condition edition ID.
     */
    readonly id: number;
    /**
     * Implementation.
     */
    readonly implementation: string;
    /**
     * Specification name.
     */
    readonly name: string;
    /**
     * Negate flag.
     */
    readonly negate: boolean;
    /**
     * Computed flag.
     */
    readonly required: boolean;
    /**
     * Edition RegEx.
     */
    readonly value: string;
}
/**
 * <!-- subcategory:Profiles -> Custom Format Condition Edition data source.
 * For more information refer to [Custom Format Conditions](https://wiki.servarr.com/radarr/settings#conditions).
 *
 * {{% examples %}}
 * ## Example Usage
 * {{% example %}}
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as radarr from "@maienm/pulumi-radarr";
 * import * as radarr from "@pulumi/radarr";
 *
 * const exampleCustomFormatConditionEdition = radarr.Profiles.getCustomFormatConditionEdition({
 *     name: "Example",
 *     negate: false,
 *     required: false,
 *     value: ".*Extended.*",
 * });
 * const exampleCustomFormat = new radarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatConditionEdition],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatConditionEditionOutput(args: GetCustomFormatConditionEditionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomFormatConditionEditionResult> {
    return pulumi.output(args).apply((a: any) => getCustomFormatConditionEdition(a, opts))
}

/**
 * A collection of arguments for invoking getCustomFormatConditionEdition.
 */
export interface GetCustomFormatConditionEditionOutputArgs {
    /**
     * Specification name.
     */
    name: pulumi.Input<string>;
    /**
     * Negate flag.
     */
    negate: pulumi.Input<boolean>;
    /**
     * Computed flag.
     */
    required: pulumi.Input<boolean>;
    /**
     * Edition RegEx.
     */
    value: pulumi.Input<string>;
}
