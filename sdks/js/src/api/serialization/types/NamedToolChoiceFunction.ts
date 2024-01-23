/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";

export const NamedToolChoiceFunction: core.serialization.ObjectSchema<
    serializers.NamedToolChoiceFunction.Raw,
    JulepApi.NamedToolChoiceFunction
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace NamedToolChoiceFunction {
    interface Raw {
        name: string;
    }
}