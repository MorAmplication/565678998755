/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteMorArgs } from "./DeleteMorArgs";
import { MorCountArgs } from "./MorCountArgs";
import { MorFindManyArgs } from "./MorFindManyArgs";
import { MorFindUniqueArgs } from "./MorFindUniqueArgs";
import { Mor } from "./Mor";
import { MorService } from "../mor.service";
@graphql.Resolver(() => Mor)
export class MorResolverBase {
  constructor(protected readonly service: MorService) {}

  async _morsMeta(
    @graphql.Args() args: MorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Mor])
  async mors(@graphql.Args() args: MorFindManyArgs): Promise<Mor[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Mor, { nullable: true })
  async mor(@graphql.Args() args: MorFindUniqueArgs): Promise<Mor | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Mor)
  async deleteMor(@graphql.Args() args: DeleteMorArgs): Promise<Mor | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
