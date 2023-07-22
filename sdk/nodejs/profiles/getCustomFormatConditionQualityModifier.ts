// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -> Custom Format Condition Quality Modifier data source.
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
 * const exampleCustomFormatConditionQualityModifier = radarr.Profiles.getCustomFormatConditionQualityModifier({
 *     name: "REMUX",
 *     negate: false,
 *     required: false,
 *     value: "5",
 * });
 * const exampleCustomFormat = new radarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatConditionQualityModifier],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatConditionQualityModifier(args: GetCustomFormatConditionQualityModifierArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomFormatConditionQualityModifierResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("radarr:Profiles/getCustomFormatConditionQualityModifier:getCustomFormatConditionQualityModifier", {
        "name": args.name,
        "negate": args.negate,
        "required": args.required,
        "value": args.value,
    }, opts);
}

/**
 * A collection of arguments for invoking getCustomFormatConditionQualityModifier.
 */
export interface GetCustomFormatConditionQualityModifierArgs {
    /**
     * Specification name.
     */
    name: string;
    /**
     * Negate modifier.
     */
    negate: boolean;
    /**
     * Computed modifier.
     */
    required: boolean;
    /**
     * Quality modifier ID. `0` NONE, `1` REGIONAL, `2` SCREENER, `3` RAWHD, `4` BRDISK, `5` REMUX.
     */
    value: string;
}

/**
 * A collection of values returned by getCustomFormatConditionQualityModifier.
 */
export interface GetCustomFormatConditionQualityModifierResult {
    /**
     * Custom format condition quality modifier ID.
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
     * Negate modifier.
     */
    readonly negate: boolean;
    /**
     * Computed modifier.
     */
    readonly required: boolean;
    /**
     * Quality modifier ID. `0` NONE, `1` REGIONAL, `2` SCREENER, `3` RAWHD, `4` BRDISK, `5` REMUX.
     */
    readonly value: string;
}
/**
 * <!-- subcategory:Profiles -> Custom Format Condition Quality Modifier data source.
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
 * const exampleCustomFormatConditionQualityModifier = radarr.Profiles.getCustomFormatConditionQualityModifier({
 *     name: "REMUX",
 *     negate: false,
 *     required: false,
 *     value: "5",
 * });
 * const exampleCustomFormat = new radarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatConditionQualityModifier],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatConditionQualityModifierOutput(args: GetCustomFormatConditionQualityModifierOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomFormatConditionQualityModifierResult> {
    return pulumi.output(args).apply((a: any) => getCustomFormatConditionQualityModifier(a, opts))
}

/**
 * A collection of arguments for invoking getCustomFormatConditionQualityModifier.
 */
export interface GetCustomFormatConditionQualityModifierOutputArgs {
    /**
     * Specification name.
     */
    name: pulumi.Input<string>;
    /**
     * Negate modifier.
     */
    negate: pulumi.Input<boolean>;
    /**
     * Computed modifier.
     */
    required: pulumi.Input<boolean>;
    /**
     * Quality modifier ID. `0` NONE, `1` REGIONAL, `2` SCREENER, `3` RAWHD, `4` BRDISK, `5` REMUX.
     */
    value: pulumi.Input<string>;
}