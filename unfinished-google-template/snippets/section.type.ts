import type { TemplateResult } from 'lit';

export type Section<TData> = (data: TData) => TemplateResult;